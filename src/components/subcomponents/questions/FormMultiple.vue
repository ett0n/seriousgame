<script setup lang="ts">
import { questionSwitch } from "@/functions";
import type { PropType } from "vue";
import { ref } from "vue";
import type QuestionData from "../../../types/QuestionData";

const props = defineProps({
  question: {
    required: true,
    type: Object as PropType<QuestionData>,
  },
});

const emit = defineEmits(["formSubmit"]);

const answerRefs = ref([]);
const none = ref(null);

const onSubmit = () => {
  let checkedAnswers: string[] = [];
  let validAnswers = JSON.stringify(props.question.response.validAnswers);

  console.log(answerRefs.value);

  answerRefs.value.forEach((el: any) => {
    if (el.getElementsByTagName("input")[0].checked) {
      checkedAnswers.push(el.getElementsByTagName("label")[0].innerHTML);
    }
  }); //foreachend

  emit("formSubmit", JSON.stringify(checkedAnswers) === validAnswers);
};
</script>

<template>
  <form @submit.prevent="onSubmit" action="">
    <div class="answers" v-for="(answer, index) in question.response.answers" ref="answerRefs">
      <input v-if="question.qtype === 'form-multiple'" type="checkbox" :name="index.toString()" id="index.toString()" value="" />
      <input v-if="question.qtype === 'form-unique'" type="radio" name="form-unique" id="index.toString()" value="" />
      <label :for="index.toString()">{{ answer }}</label>
    </div>
    <div ref="none"></div>
    <button>Valider</button>
  </form>
</template>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
}
.answers {
  align-self: flex-start;
}
button {
  margin-top: 1rem;
}
</style>
