<script setup lang="ts">
import { ref } from "vue";
let dice = ref<number>(1);

const rollDice = () => {
  dice.value = Math.round(Math.random() * 5) + 1;
};
</script>

<template>
  <div>
    <button @click="rollDice()">Roll the dice!</button>
    <p>{{ dice }}</p>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  p {
    border: 1px solid black;
    width: 25px;
    border-radius: 100%;
  }
}
</style>
