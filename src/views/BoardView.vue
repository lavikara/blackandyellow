<template>
  <div id="task-view">
    <LoaderComponent v-if="loading" />
    <MobileSidebar />
    <Sidebar />
    <div class="view-container">
      <DashboardHeader />
      <div class="tw-pt-28 tw-min-h-screen tw-bg-gray-light tw-overflow-scroll">
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component
              :is="Component"
              class="main tw-py-6 tw-px-4 lg:tw-px-8 xl:tw-mx-20"
            />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import DashboardHeader from "../layout/navigation/Header.vue";
import LoaderComponent from "../components/notification/LoaderComponent.vue";
import Sidebar from "../layout/navigation/Sidebar.vue";
import MobileSidebar from "../layout/navigation/MobileSidebar.vue";

const store = useStore();

const loading = computed(() => {
  return store.state.loading;
});
</script>

<style lang="scss" scoped>
#task-view {
  @include fadeIn;
  height: 100%;
  display: flex;

  .view-container {
    width: 100%;

    @media screen and (min-width: 1280px) {
      width: calc(100% - #{$side-bar-width});
    }
  }

  .main {
    @media (min-width: 1024px) {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
