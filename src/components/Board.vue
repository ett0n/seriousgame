<script setup lang="ts">
import BoardTile from "./subcomponents/BoardTile.vue";
import { ref } from "vue";
import axios from "axios";

let objQuestion = ref([]);
axios
  .get("https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions")
  .then((response) => {
    objQuestion.value = response.data;
    console.log(objQuestion);
  })
  .catch((error) => console.log(error));
let test = [1, 2, 3, 4];
</script>
<template>
  <ul>
    <li v-for="(tile, index) in objQuestion">
      <BoardTile :tile="tile" />
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
