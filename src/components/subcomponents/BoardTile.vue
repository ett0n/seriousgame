<script setup lang="ts">
import type { PropType } from "vue";
import type QuestionData from "./../../types/QuestionData";
import { useGameStore } from "../../store/game";
const store = useGameStore();

defineProps({
  tile: {
    required: true,
    type: Object as unknown as PropType<QuestionData>,
  },
  tileIndex: {
    required: true,
    type: Number as PropType<number>,
  },
});
</script>

<template>
  <div class="board-tile">
    <h2>{{ tileIndex }}{{ tile.number }}</h2>
    <p v-if="tile.visited">Visited</p>
    <ul>
      <li v-for="(player, index) in store.getPlayers" v-show="player.curentTile === tileIndex">{{ player.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
.board-tile {
  border: 2px solid red;
  color: green;
  width: 100px;
  height: 100px;
}
</style>
