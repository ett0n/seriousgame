import { questionSwitch } from "./../functions";
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type QuestionData from "../types/QuestionData";
import type Players from "../types/Players";

import axios from "axios";
export const useGameStore = defineStore({
  id: "game",
  state: () => ({
    players: ref<Players[]>([
      { name: "Mathieu", score: 0, curentTile: 0, finished: false },
      { name: "Lucie", score: 0, curentTile: 0, finished: false },
      { name: "Marc", score: 0, curentTile: 0, finished: false },
    ]),
    activePlayer: ref<number>(0),
    activeQuestion: ref<QuestionData>({ number: 0, qtype: "undefined" } as QuestionData),
    questions: ref<QuestionData[]>([]),
    diceNb: ref<number>(1),
  }),
  getters: {
    getPlayers: (state) => {
      return state.players;
    },
    getQuestions: (state) => {
      return state.questions;
    },
    getActiveQuestion: (state) => {
      return state.activeQuestion;
    },

    getDice: (state) => {
      return state.diceNb;
    },
    getActivePlayer: (state) => {
      return state.activePlayer;
    },
  },
  actions: {
    setAddPlayer(player: Players) {
      this.players.push({ ...player });
    },
    setPlayers(players: Array<Players>) {
      this.players = [...players];
    },
    setActivePlayer(player: number) {
      this.activePlayer = player;
    },
    setActiveQuestion(question: QuestionData) {
      this.activeQuestion = question;
    },
    setQuestionVisited(questionNb: number) {
      this.questions[questionNb].visited = true;
    },

    async setInitQuestions() {
      //case depart
      this.questions = [{ number: 0, qtype: "Start", visited: true } as QuestionData];
      await axios
        .get("https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D")
        .then((response) => {
          response.data.forEach((el: QuestionData) => {
            let objTemp: QuestionData = { ...el };
            objTemp.visited = false;
            objTemp.answered = null;
            this.questions.push(objTemp);
          });
        })
        .catch((error: string) => {
          console.log(error);
          axios.get("/public/data.json").then((response) => {
            response.data.forEach((el: QuestionData) => {
              let objTemp: QuestionData = { ...el };
              objTemp.visited = false;
              objTemp.answered = null;
              this.questions.push(objTemp);
            });
          });
        });
      this.questions.push({ number: this.questions.length, qtype: "Finish" } as QuestionData);
    },

    setQuestions(questions: Array<QuestionData>) {
      this.questions = [...questions];
    },

    setDice(dice: number) {
      this.diceNb = dice;
    },
  },
});
