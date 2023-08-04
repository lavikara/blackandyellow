<template>
  <div id="task-list">
    <div class="task tw-w-full tw-rounded-lg tw-p-4">
      <h3
        :id="title"
        class="tw-font-bold tw-text-xl"
        contentEditable="true"
        @keydown.enter.prevent="saveTitle(title)"
      >
        {{ title }}
      </h3>
      <div v-for="(item, index) in taskList" :key="item.id">
        <div
          class="task-bg tw-w-full tw-font-light tw-tracking-widest tw-text-md tw-leading-relaxed tw-rounded-lg tw-mt-4 tw-p-2"
          :class="{
            'tw-border-0 tw-cursor-text':
              contentEditable === true && item.id === btnId,
            ' tw-cursor-grab': contentEditable === false,
          }"
          draggable="true"
          :contentEditable="contentEditable"
          @blur="contentEditable = false"
        >
          <p :id="item.id">
            {{ item.task }}
          </p>
          <div class="tw-flex tw-justify-between tw-mt-4">
            <TrashIcon
              class="btn tw-cursor-pointer"
              :id="item.id"
              @click="deleteTask(item.id)"
            />
            <div>
              <CheckIcon
                class="btn tw-cursor-pointer"
                v-show="contentEditable === true && item.id === btnId"
                :id="item.id"
                @click="saveTask(item.id)"
              />

              <PenIcon
                class="btn tw-cursor-pointer"
                v-show="contentEditable === false || item.id !== btnId"
                :id="item.id"
                @click="editTask(item.id)"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="tw-mt-4">
        <TextAreaInput
          v-if="showAddTask"
          class=""
          :inputStyle="inputStyle"
          placeHolder="Enter Task"
          label="Enter Task"
          name="task"
          id="task"
          @set="setTask"
        />
        <BtnComponent
          v-if="!showAddTask"
          class="btn tw-mt-4"
          title="Add Task"
          :btnStyle="addTaskBtnStyle"
          @click="toggleAddTask"
        />
        <BtnComponent
          v-if="showAddTask"
          class="btn"
          title="Save"
          :btnStyle="btnStyle"
          @click="addTask"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { checkForOnlyWhiteSpace } from "@/utils/helpers";
import PenIcon from "@/components/icons/PenIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import BtnComponent from "@/components/general/BtnComponent.vue";
import TextAreaInput from "@/components/general/TextAreaInput.vue";

const store = useStore();

const props = defineProps({
  title: { type: String, default: () => "", required: true },
  taskList: { type: Array, default: () => [], required: true },
});

const contentEditable = ref(false);
const showAddTask = ref(false);
let task = ref("");
const btnId = ref("");
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

const addTaskBtnStyle = reactive({
  hoverColor: "#1a8a87",
  color: "#1a8a87",
  fontSize: "16px",
});

const editTask = (id) => {
  contentEditable.value = true;
  btnId.value = id;
};

const saveTask = (id) => {
  contentEditable.value = false;
  const task = document.getElementById(id).innerText;
  btnId.value = "";
  store.dispatch("taskModule/editTask", {
    title: props.title,
    task: { id, task },
  });
};

const saveTitle = (id) => {
  contentEditable.value = false;
  document.getElementById(id).blur();
};

const toggleAddTask = () => {
  showAddTask.value = true;
};

const setTask = (payload) => {
  task.value = payload;
};

const deleteTask = (id) => {
  store.dispatch("taskModule/deleteTask", {
    title: props.title,
    id,
  });
};

const addTask = () => {
  showAddTask.value = false;
  const hasOnlyWhiteSpace = checkForOnlyWhiteSpace(task.value);
  if (!task.value.length || hasOnlyWhiteSpace) return;
  store.dispatch("taskModule/addTask", {
    title: props.title,
    task: { id: Date.now(), task: task.value },
  });
  task.value = "";
};
</script>

<style lang="scss" scoped>
#task-list {
  .task {
    background-color: $modal-bg;
  }

  .task-bg {
    background-color: $task-bg;

    .btn {
      @include fadeIn;
    }
  }
}
</style>
