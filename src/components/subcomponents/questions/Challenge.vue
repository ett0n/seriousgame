<script setup lang="ts">
import type { PropType } from "vue";
import type QuestionData from "../../../types/QuestionData";

const props = defineProps({
  question: {
    required: true,
    type: Object as PropType<QuestionData>,
  },
});

const emit = defineEmits(["formSubmit"]);

const answer = (answer: boolean) => {
  emit("formSubmit", answer);
};
</script>

<template>
  <form @submit.prevent="" action="">
    <button @click="answer(true)">Bonne réponse ✅</button>
    <button @click="answer(false)">Mauvaise réponse ❌</button>
  </form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  max-width: 600px;
}
</style>
