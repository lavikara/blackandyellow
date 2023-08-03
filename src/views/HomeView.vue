<template>
  <div
    id="home-view"
    class="tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center"
  >
    <h1 class="tw-text-2xl">Welcome to groove task manager</h1>
    <span
      class="tw-text-white tw-bg-green tw-rounded-lg tw-cursor-pointer tw-p-4 tw-mt-4"
      @click="router.push({ name: 'DefaultBoardView' })"
      >Get Started</span
    >
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped></style>
