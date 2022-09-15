<script setup lang="ts">
import { ref } from "vue";
import { useGameStore } from "../../store/game";
import { playerSwitch } from "../../functions";

const store = useGameStore();

const rollDice = () => {
  store.setDice(Math.round(Math.random() * 5) + 1);
  console.log(store.getPlayers[store.activePlayer], store.getDice);
  playerSwitch();
};
</script>

<template>
  <div>
    <button @click="rollDice()">Roll the dice!</button>
    <p v-if="store.getDice === 6">?</p>
    <p v-else-if="store.getDice === 5">X</p>
    <p v-else>{{ store.getDice }}</p>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    border: 1px solid black;
    width: 25px;
    border-radius: 100%;
  }
}
</style>
