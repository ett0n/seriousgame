<script setup lang="ts">
import { ref } from "vue";
import { useGameStore } from "../../store/game";
import { playerSwitch } from "../../functions";

const store = useGameStore();

const emit = defineEmits(["diceClick"]);

const rollDice = () => {
  store.setDice(Math.round(Math.random() * 5) + 1);
  console.log(store.getPlayers[store.activePlayer], store.getDice);
  playerSwitch();
  emit("diceClick");
};
</script>

<template>
  <div>
    <button @click="rollDice()">🎲 Roll the dice!</button>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
