<script setup lang="ts">
import { useGameStore } from "../../store/game";
import FormMultiple from "./questions/FormMultiple.vue";
import type QuestionData from "../../types/QuestionData";
const store = useGameStore();
const question: QuestionData = store.getQuestions[store.players[store.getActivePlayer].curentTile];
console.log(question);
</script>

<template>
  <div>
    <h1>{{ question }}</h1>
    <FormMultiple :question="question"></FormMultiple>
  </div>
</template>

<style scoped></style>
