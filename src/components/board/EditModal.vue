<template>
  <div>
    <h3 class="tw-mb-2">{{ header }}</h3>
    <TextAreaInput
      class=""
      :inputStyle="inputStyle"
      placeHolder="Enter Task"
      label="Enter Task"
      name="task"
      id="editTask"
      rows="12"
      @set="setTask"
    />
    <BtnComponent
      class="btn"
      title="Save"
      :btnStyle="btnStyle"
      @click="saveEditedTask"
    />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { checkForOnlyWhiteSpace } from "@/utils/helpers";
import TextAreaInput from "@/components/general/TextAreaInput.vue";
import BtnComponent from "@/components/general/BtnComponent.vue";

const store = useStore();

const props = defineProps({
  header: { type: String, default: () => "", required: true },
});

let task = ref("");
const inputStyle = reactive({
  backgroundColor: "#ffffff",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingLeft: "8px",
});
const btnStyle = reactive({
  backgroundColor: "#1a8a87",
  hoverColor: "#1a8a87",
  hoverBgColor: "#a2eeeb",
  color: "#ffffff",
  fontSize: "12px",
  paddingTop: "1px",
  paddingBottom: "1px",
  paddingLeft: "6px",
  paddingRight: "6px",
});

const emit = defineEmits(["close"]);

const currentTask = computed(() => {
  return store.state.taskModule.currentTask;
});

const setTask = (payload) => {
  task.value = payload;
};

const saveEditedTask = () => {
  const hasOnlyWhiteSpace = checkForOnlyWhiteSpace(task.value);
  if (!task.value.length || hasOnlyWhiteSpace) {
    emit("close");
    store.dispatch("taskModule/setCurrentTask", {});
    return;
  }
  currentTask.value.task = task.value;
  store.dispatch("taskModule/editTask", currentTask.value);
  emit("close");
  store.dispatch("taskModule/setCurrentTask", {});
};
</script>

<style lang="scss" scoped></style>
