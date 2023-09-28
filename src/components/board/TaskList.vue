<template>
  <div id="task-list">
    <div
      class="task tw-w-full tw-rounded-lg tw-p-4"
      ref="dropZone"
      @drop="onDrop"
      @dragenter="onDragEnter"
      @dragover.prevent
    >
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
          @dragstart="onDragStart"
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
            <PenIcon
              class="btn tw-cursor-pointer"
              v-show="contentEditable === false || item.id !== btnId"
              :id="item.id"
              @click="openEditModal(item.id)"
            />
          </div>
        </div>
      </div>
      <div class="tw-mt-4">
        <TextAreaInput
          v-if="showAddTask.status && showAddTask.title === title"
          class=""
          :inputStyle="inputStyle"
          placeHolder="Enter Task"
          label="Enter Task"
          name="task"
          id="enterTask"
          @set="setTask"
        />
        <BtnComponent
          v-if="!showAddTask.status || showAddTask.title !== title"
          class="btn tw-mt-4"
          title="Add Task"
          :btnStyle="addTaskBtnStyle"
          @click="toggleAddTask"
        />
        <div class="tw-flex tw-justify-between">
          <CheckIcon
            v-if="showAddTask.status && showAddTask.title === title"
            class="btn tw-cursor-pointer"
            colour="#8791A7"
            @click="addNewTask"
          />
          <CloseBoxIcon
            v-if="showAddTask.status && showAddTask.title === title"
            class="btn tw-cursor-pointer"
            colour="#8791A7"
            @click="closeAddNewTask"
          />
        </div>
      </div>
    </div>
    <Teleport to="#teleport-modal">
      <SmallModal v-if="showEditModal" class="tw-z-50" @close="closeEditModal">
        <template v-slot:content>
          <EditModal
            header="Edit Task"
            :task="currentTask"
            @close="closeEditModal"
          />
        </template>
      </SmallModal>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { checkForOnlyWhiteSpace } from "@/utils/helpers";
import PenIcon from "@/components/icons/PenIcon.vue";
import TrashIcon from "@/components/icons/TrashIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import CloseBoxIcon from "@/components/icons/CloseBoxIcon.vue";
import BtnComponent from "@/components/general/BtnComponent.vue";
import TextAreaInput from "@/components/general/TextAreaInput.vue";
import EditModal from "@/components/board/EditModal.vue";
import SmallModal from "@/components/general/SmallModal.vue";

const store = useStore();

const props = defineProps({
  title: { type: String, default: () => "", required: true },
  taskList: { type: Array, default: () => [], required: true },
  showAddTask: { type: Object, default: () => {}, required: true },
});

const showEditModal = ref(false);
const contentEditable = ref(false);
let currentTask = ref("");
let task = ref("");
const btnId = ref("");
const inputStyle = reactive({
  backgroundColor: "#ffffff",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingLeft: "8px",
});

const addTaskBtnStyle = reactive({
  hoverColor: "#1a8a87",
  color: "#1a8a87",
  fontSize: "16px",
});

const onDragStart = (event) => {
  store.dispatch("taskModule/setStartDragValues", {
    id: event.target.firstChild.id,
    title: props.title,
    task: event.target.innerText,
  });
};

const onDragEnter = (event) => {
  // console.log(event);
  // console.log(event.target);
};

const onDrop = (event) => {
  store.dispatch("taskModule/setDraggedTask", props.title);
};

const openEditModal = (id) => {
  store.dispatch("taskModule/showAddTaskModal", {
    title: props.title,
    status: false,
  });
  currentTask.value = document.getElementById(id).innerText;
  store.dispatch("taskModule/setCurrentTask", {
    id,
    task: currentTask.value,
    title: props.title,
  });
  showEditModal.value = true;
};

const closeEditModal = () => {
  showEditModal.value = false;
  store.dispatch("taskModule/setCurrentTask", {});
};

const closeAddNewTask = () => {
  store.dispatch("taskModule/showAddTaskModal", {
    title: props.title,
    status: false,
  });
};

const saveTitle = (title) => {
  contentEditable.value = false;
  document.getElementById(title).blur();
  const editedTitle = document.getElementById(title).innerText;
  store.dispatch("taskModule/editTitle", { title, editedTitle: editedTitle });
};

const toggleAddTask = () => {
  store.dispatch("taskModule/showAddTaskModal", {
    title: props.title,
    status: true,
  });
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

const addNewTask = () => {
  store.dispatch("taskModule/showAddTaskModal", {
    title: props.title,
    status: false,
  });
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
