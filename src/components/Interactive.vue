<script setup lang="ts">
import Form from "./subcomponents/Form.vue";
import Dice from "./subcomponents/Dice.vue";
import { useGameStore } from "../store/game";
const store = useGameStore();
</script>

<template>
  <div>
    <Form></Form>
    <div class="dice-container">
      <p>{{ store.getPlayers[store.getActivePlayer].name }} c'est à toi !</p>
      <Dice />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dice-container {
  flex-direction: column;
  display: flex;
  justify-content: center;
}
</style>
