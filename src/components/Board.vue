<script setup lang="ts">
import BoardTile from "./subcomponents/BoardTile.vue";
import { ref } from "vue";
import axios from "axios";
import { useGameStore } from "../store/game";
const store = useGameStore();
</script>
<template>
  <div>
    <ul>
      <li v-for="(tile, index) in store.getQuestions" :key="index">
        <BoardTile :tile="tile" :tileIndex="index" />
      </li>
    </ul>
    <div class="score-container">
      <h2>Scores:</h2>
      <ul>
        <li v-for="player in store.getPlayers">{{ player.name }}: {{ player.score }}</li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.score-container {
  display: flex;
  align-items: center;
  h2 {
    margin: 0 0.5rem 0 0;
  }
  li {
    border: 1px solid rgba(113, 80, 236, 1);
    padding: 0.2rem;
    border-radius: 5px;
  }
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
