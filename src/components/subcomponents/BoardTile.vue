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
  <div class="board-tile" :class="{ special: tile.qtype === 'Start' || tile.qtype === 'Finish', visited: tile.visited, challenge: tile.challenge, good: tile.answered && tile.visited, bad: !tile.answered && tile.answered !== null && tile.visited }">
    <h2>{{ tile.number }}</h2>
    <div v-if="tile.qtype === 'Start'">
      <p>🏁 {{ tile.qtype }}</p>
    </div>
    <div v-else-if="tile.qtype === 'Finish'">
      <p>🏆 {{ tile.qtype }}</p>
    </div>
    <ul>
      <li class="player-li" v-for="(player, index) in store.getPlayers" v-show="player.curentTile === tileIndex">
        <span>🤨 {{ player.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.board-tile {
  padding: 1rem 0 0 0;
  border: 1px solid lavender;
  border-radius: 5px;
  color: rgba(113, 80, 236, 1);
  width: 100px;
  height: 140px;

  &.challenge {
    border: 1px solid rgba(149, 154, 214, 1);
    background-color: rgba(149, 154, 214, 0.35);

    &::after {
      position: relative;
      content: "?";
      font-size: 2rem;
      color: rgba(149, 154, 214, 1);
    }
  }
  &.visited {
    border: 1px solid grey;
    background-color: rgba(149, 149, 149, 0.1);
    color: rgba(149, 149, 149, 0.35);
    &.good {
      border: 1px solid green;
    }
    &.bad {
      border: 1px solid red;
    }
    &.special {
      border: 1px solid rgba(113, 80, 236, 0.35);
    }
  }
  &.special {
    border: 1px solid rgba(113, 80, 236, 0.35);
    background-color: rgba(113, 80, 236, 0.35);
    color: rgba(113, 80, 236, 1);
  }
  h2 {
    margin: 0 0 0.2rem 0;
  }
  p {
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
        color: black;
        flex: 0 0 auto;
        width: 100%;
        font-size: 0.8rem;
        background-color: rgba(255, 255, 255, 0.8);
        border: 2px solid rgba(113, 80, 236, 1);
        border-radius: 10px;
      }
    }
  }
}
</style>
