<script setup lang="ts">
import BoardTile from "./subcomponents/BoardTile.vue";
import { ref } from "vue";
import axios from "axios";
import { useGameStore } from "../store/game";
const store = useGameStore();
</script>
<template>
  <ul>
    <li v-for="(tile, index) in store.getQuestions" :key="index">
      <h2>{{ index }}</h2>
      <BoardTile :tile="tile" :tileIndex="index" />
    </li>
  </ul>
</template>
<style scoped lang="scss">
.board-tile {
  border: 2px solid red;
  color: green;
}
h2 {
  color: blue;
}
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  padding: 0;
  li {
    list-style: none;
  }
}
</style>
