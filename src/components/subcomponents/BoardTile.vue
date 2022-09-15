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
    <h2>{{ tile.number }}</h2>
    <div v-if="tile.qtype === 'Start'">
      <p>{{ tile.qtype }}</p>
    </div>
    <div v-else-if="tile.qtype === 'Finish'">
      <p>{{ tile.qtype }}</p>
    </div>
    <div v-else>
      <p v-if="tile.visited">Visited</p>
      <p v-if="tile.challenge">?</p>
    </div>
    <ul>
      <li class="player-li" v-for="(player, index) in store.getPlayers" v-show="player.curentTile === tileIndex">
        <span>{{ player.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.board-tile {
  padding: 1rem 0 0 0;
  border: 1px solid lavender;
  border-radius: 5px;
  color: palevioletred;
  width: 100px;
  height: 100px;
  p,
  h2 {
    margin: 0;
  }
  ul {
    padding: 0;
    .player-li {
      list-style: none;
      padding: 0.1rem 0.1rem;
      display: flex;
      justify-content: center;
      span {
        color: red;
        flex: 0 0 auto;
        width: 100%;
        font-size: 0.8rem;
        background-color: white;
        border-radius: 10px;
      }
    }
  }
}
</style>
