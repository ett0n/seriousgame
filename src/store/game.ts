import { ref, computed } from "vue";
import { defineStore } from "pinia";
import QuestionData from "../types/QuestionData";
import Players from "../types/Players";

import axios from "axios";
export const useGameStore = defineStore({
  id: "game",
  state: () => ({
    players: ref<Players[]>([
      { name: "Mathieu", score: 0, curentTile: 0 },
      { name: "Lucie", score: 1, curentTile: 2 },
    ]),
    activePlayer: ref<number>(0),
    questions: ref<QuestionData[]>([]),
    diceNb: ref<number>(),
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
    setMembers(player: Players) {
      this.players.push({ ...player });
    },

    setActivePlayer(player: number) {
      this.activePlayer = player;
    },

    async setQuestions() {
      this.questions = [{ number: 0 } as QuestionData];
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
    },

    setDice(dice: number) {
      this.diceNb = dice;
    },
  },
});
