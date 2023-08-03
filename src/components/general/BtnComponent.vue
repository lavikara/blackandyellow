<template>
  <button
    ref="btnEl"
    contentEditable="false"
    type="submit"
    class="tw-text-white tw-rounded-lg tw-cursor-pointer"
    :style="btnStyle"
    @mouseover="setHoverStyle"
    @mouseleave="resetStyle"
  >
    <span>{{ props.title }}</span>
  </button>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  btnStyle: { type: Object, required: true },
});

const btnEl = ref();

const setHoverStyle = () => {
  btnEl.value.style.color = props.btnStyle.hoverColor;
  btnEl.value.style.backgroundColor = props.btnStyle.hoverBgColor;
};

const resetStyle = () => {
  btnEl.value.style.color = props.btnStyle.color;
  btnEl.value.style.backgroundColor = props.btnStyle.backgroundColor;
};
</script>

<style lang="scss" scoped></style>
