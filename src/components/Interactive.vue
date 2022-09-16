<script setup lang="ts">
import { ref } from "vue";
import Form from "./subcomponents/Form.vue";
import Dice from "./subcomponents/Dice.vue";
import { useGameStore } from "../store/game";
const store = useGameStore();
let showDice = ref<boolean>(true);

const answered = (goodAnswer: boolean) => {
  setTimeout(() => switchDice(), 1000);
};
const switchDice = () => {
  if (store.getDice !== 5) showDice.value = !showDice.value;
};
</script>

<template>
  <div class="container">
    <div class="dice-container">
      <div class="dice-container-roll">
        <span v-if="store.getDice === 6">🎲 ?</span>
        <span v-else-if="store.getDice === 5">🎲 X</span>
        <span v-else>🎲 {{ store.getDice }}</span>
      </div>
      <div v-if="showDice">
        <p>{{ store.getPlayers[store.getActivePlayer].name }} c'est à toi !</p>
        <Dice @diceClick="switchDice" />
      </div>
    </div>
    <Form @sendAnswered="answered" :questionShown="!showDice" v-if="!showDice"></Form>
  </div>
</template>

<style scoped lang="scss">
.container {
  background-color: rgba(149, 154, 214, 0.3);
  border-radius: 10px;
  padding: 1rem;
}
.dice-container {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  &-roll {
    border: 2px solid rgba(113, 80, 236, 1);
    background-color: rgba(255, 255, 255, 0.1);
    color: whitesmoke;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
