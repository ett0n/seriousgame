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
      { name: "Lucie", score: 1, curentTile: 0, finished: false },
      { name: "Marc", score: 1, curentTile: 0, finished: false },
    ]),
    activePlayer: ref<number>(0),
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

    async setInitQuestions() {
      //case depart
      this.questions = [{ number: 0, qtype: "Start" } as QuestionData];
      await axios
        .get("https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D")
        .then((response) => {
          response.data.forEach((el: QuestionData) => {
            let objTemp: QuestionData = { ...el };
            objTemp.visited = false;
            this.questions.push(objTemp);
          });
        })
        .catch((error: string) => {
          console.log(error);
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
