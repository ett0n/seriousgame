<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { storeToRefs } from "pinia";
import Board from "./components/Board.vue";
import Interactive from "./components/Interactive.vue";
import { useGameStore } from "./store/game";

const store = useGameStore();
store.setInitQuestions();
</script>

<template>
  <Board class="board" />
  <Interactive class="interactive" />
</template>

<style scoped lang="scss"></style>
