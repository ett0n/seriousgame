<script setup lang="ts">
import { stringifyStyle } from "@vue/shared";
import type { PropType } from "vue";
import type QuestionData from "../../../types/QuestionData";

defineProps({
  question: {
    required: true,
    type: Object as PropType<QuestionData>,
  },
});
</script>

<template>
  <form action=""></form>
</template>

<style scoped lang="sccs"></style>
