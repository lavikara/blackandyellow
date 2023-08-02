<template>
  <div id="task-page">
    <h1>hello from task page</h1>
  </div>
</template>

<script setup>
import api from "@/api/task";

(async () => {
  try {
    const response = await api.getAllTask();
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
})();
</script>

<style lang="scss" scoped></style>
