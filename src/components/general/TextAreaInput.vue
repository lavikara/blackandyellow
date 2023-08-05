<template>
  <div>
    <textarea
      class="tw-w-full tw-rounded-lg"
      :style="inputStyle"
      @input="setInput"
      @blur="validate"
      :type="type"
      :placeholder="placeHolder"
      :required="required"
      :name="name"
      :id="id"
      :rows="rows"
      :cols="cols"
      v-model="textData"
    ></textarea>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useStore } from "vuex";

const store = useStore();

const emit = defineEmits(["set", "valid"]);

const props = defineProps({
  name: { type: String, default: () => "", required: true },
  rows: { type: String, default: () => "" },
  cols: { type: String, default: () => "" },
  id: { type: String, default: () => "", required: true },
  required: { type: Boolean, default: () => true },
  placeHolder: { type: String, default: () => "", required: true },
  type: { type: String, default: () => "text" },
  inputStyle: { type: Object, required: true },
});

let textData = ref("");

const currentTask = computed(() => {
  const currentTask = store.state.taskModule.currentTask?.task;
  return currentTask;
});

const validate = () => {
  switch (props.type) {
    case "text":
      if (textData.value?.length === 0) return emit("valid");
      break;

    default:
      break;
  }
};

const setInput = () => {
  emit("set", textData.value);
};

watchEffect(() => (textData.value = currentTask.value));
</script>

<style lang="scss" scoped></style>
