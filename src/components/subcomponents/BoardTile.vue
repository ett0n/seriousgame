<script setup lang="ts">
defineProps({
  tile: Array,
});
</script>

<template>
  <div class="board-tile">
    <h2>{{ tile.number }}</h2>
    <p>{{ tile.question }}</p>
  </div>
</template>

<style scoped>
.board-tile {
  border: 2px solid red;
  color: green;
}
</style>
