<template>
  <div id="onboarding-view">
    <div
      class="tw-w-full lg:tw-col-start-2 lg:tw-col-end-3 tw-mx-auto lg:tw-m-auto"
    >
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
