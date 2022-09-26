<script setup lang="ts">
import { useGameStore } from "../../../store/game";
import Dice from "../../subcomponents/Dice.vue";
const store = useGameStore();
const props = defineProps({
  answerType: Boolean,
  visited: Boolean,
});

if (props.answerType) {
  let newPlayers = [...store.getPlayers];
  newPlayers[store.getActivePlayer === 0 ? store.getPlayers.length - 1 : store.getActivePlayer - 1].score += store.getActiveQuestion.rewards;
  store.setPlayers(newPlayers);
}
</script>

<template>
  <div v-if="visited">
    <h2>😔 Cette case est déjà visitée</h2>
    <Dice></Dice>
  </div>
  <div v-else-if="answerType">
    <h1>✅</h1>
    Bien joué !
  </div>
  <div v-else>
    <h1>❌</h1>
    Mauvaise réponse !
  </div>
</template>

<style scoped lang="scss"></style>
