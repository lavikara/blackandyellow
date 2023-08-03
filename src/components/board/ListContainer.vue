<template>
  <div id="list-container" class="tw-flex">
    <div v-for="(item, index) in tasks" :key="item.id" class="tw-mx-2">
      <div class="tw-relative tw-w-72">
        <TaskList
          v-if="item?.title"
          :title="item?.title"
          :taskList="item?.taskList"
        />
        <div v-if="!item.title" class="tw-absolute tw-top-0 tw-w-full">
          <AddTitle
            v-if="!showTitleField"
            @clicked="showTitleField = !showTitleField"
          />
          <TitleInputField
            v-if="showTitleField"
            @clicked="showTitleField = !showTitleField"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import TaskList from "@/components/board/TaskList.vue";
import AddTitle from "@/components/board/AddTitle.vue";
import TitleInputField from "@/components/board/TitleInputField.vue";

const store = useStore();

let showTitleField = ref(false);

const tasks = computed(() => {
  return store.state.taskModule.tasks;
});
</script>

<style lang="scss" scoped></style>
