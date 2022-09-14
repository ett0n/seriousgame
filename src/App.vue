<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { storeToRefs } from "pinia";
import Board from "./components/Board.vue";
import Interactive from "./components/Interactive.vue";
import { useGameStore } from "./store/game";

const store = useGameStore();
store.setQuestions();
console.log(store.getPlayers.length);
</script>

<template>
  <h1>The serious Game</h1>
  <Board class="board" />
  <Interactive class="interactive" />
</template>

<style scoped lang="scss">
$color: blue;
</style>
