<template>
  <div id="sidebar" class="tw-hidden xl:tw-inline-block tw-z-10">
    <div
      class="sidebar-container tw-fixed tw-top-0 tw-h-screen tw-overflow-y-scroll tw-pb-16 tw-bg-white"
    >
      <img
        src="@/assets/img/logo.webp"
        class="tw-w-12 tw-m-auto tw-pt-7 tw-pb-12 tw-cursor-pointer"
        alt="groove"
      />
      <nav>
        <div>
          <SidebarMenu
            title="Task"
            href="/dashboard/tasks"
            :focus="tasksFocus || $route.path.includes('/dashboard/tasks')"
          />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import SidebarMenu from "@/components/navigation/SidebarMenu.vue";

export default {
  name: "Sidebar",

  components: { SidebarMenu },

  data() {
    return {
      tasksFocus: false,
    };
  },

  methods: {
    setFocus(route) {
      this.tasksFocus = false;
      switch (route) {
        case "TaskPage":
          this.tasksFocus = true;
          break;
      }
    },
  },

  watch: {
    $route(to, from) {
      deep: true;
      immediate: true;
      if (to !== from) {
        this.setFocus(this.$route.name);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#sidebar {
  width: $side-bar-width;

  .sidebar-container {
    width: $side-bar-width;
  }
}
</style>
