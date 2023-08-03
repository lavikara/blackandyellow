<template>
  <div id="task-page">
    <ListContainer />
  </div>
</template>

<script setup>
import ListContainer from "@/components/board/ListContainer.vue";
import { useStore } from "vuex";

const store = useStore();

store.dispatch("taskModule/getAllTask");
</script>

<style lang="scss" scoped></style>
