<template>
  <div id="add-title">
    <div
      class="container tw-flex tw-items-center tw-rounded-lg tw-shadow tw-cursor-pointer tw-p-2"
      @click="emit('clicked')"
    >
      <PlusIcon class="tw-mr-2" />
      <p class="tw-text-sm">Add Title</p>
    </div>
  </div>
</template>

<script setup>
import PlusIcon from "@/components/icons/PlusIcon.vue";

const emit = defineEmits(["clicked"]);
</script>

<style lang="scss" scoped>
#add-title {
  @include fadeIn;
  .container {
    background-color: $modal-bg;
  }
}
</style>
