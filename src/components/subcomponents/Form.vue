<script setup lang="ts">
import { ref, watch } from "vue";
import { useGameStore } from "../../store/game";
import FormMultiple from "./questions/FormMultiple.vue";
import type QuestionData from "../../types/QuestionData";
import GoodBadAnswer from "./questions/GoodBadAnswer.vue";
import Challenge from "./questions/Challenge.vue";

const emit = defineEmits(["sendAnswered"]);
const props = defineProps({
  questionShown: Boolean,
});

let hideQuestion = ref<boolean>(props.questionShown);
const store = useGameStore();
let question = ref<QuestionData>(store.getActiveQuestion);
let lavaleur = ref();
let goodAnswerParent = ref<boolean>();

const answered = (goodAnswer: boolean) => {
  emit("sendAnswered", goodAnswer);
  goodAnswerParent.value = goodAnswer;
  hideQuestion.value = false;
};

//ecouter la valeur de question active pour mettre la bonne de question dans le formulaire
watch(
  () => store.getActiveQuestion,
  (n) => (question.value = n)
);

console.log(question);
</script>

<template>
  <div>
    <div v-if="!hideQuestion" class="good-bad">
      <GoodBadAnswer :answerType="goodAnswerParent"></GoodBadAnswer>
    </div>
    <div v-if="hideQuestion">
      <h2>Question {{ question.qtype }} pour {{ store.getPlayers[store.getActivePlayer === 0 ? store.getPlayers.length - 1 : store.getActivePlayer - 1].name }} !</h2>
      <h3>{{ question.question }}</h3>
      <div class="questions-container">
        <FormMultiple v-if="question.qtype === 'form-multiple' || question.qtype === 'form-unique'" :question="question" @formSubmit="answered"></FormMultiple>
        <Challenge v-if="question.qtype === 'challenge' || question.qtype === 'liaison' || question.qtype === 'classement' || question.qtype === 'ordre'" :question="question" @formSubmit="answered"></Challenge>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.questions-container {
  display: flex;
  justify-content: center;
}
</style>
