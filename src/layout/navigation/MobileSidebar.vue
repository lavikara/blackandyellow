<template>
  <div id="mobile-sidebar" class="tw-fixed xl:tw-hidden tw-z-30">
    <nav class="navbar">
      <div class="navbar-container">
        <input
          class="tw-fixed tw-top-8 tw-left-5 tw-opacity-0 tw-w-7 tw-h-5 tw-cursor-pointer tw-z-40"
          type="checkbox"
          name="mobileSidebar"
          id="mobile-sidebar"
          ref="mobileSidebar"
        />
        <div
          class="hamburger-lines tw-fixed tw-top-8 tw-left-5 tw-flex tw-flex-col tw-w-7 tw-h-5 tw-justify-between tw-z-20"
        >
          <span class="line1 tw-h-1 tw-rounded tw-bg-gray"></span>
          <span class="line2 tw-h-1 tw-rounded tw-bg-gray"></span>
          <span class="line3 tw-h-1 tw-rounded tw-bg-gray"></span>
        </div>
        <div
          class="menu-items tw-absolute tw-h-screen tw-w-80 tw-bg-white tw-pt-28 tw-overflow-scroll tw-z-10"
        >
          <img
            src="@/assets/img/logo.webp"
            class="tw-w-12 tw-absolute tw-top-4 tw-right-10 tw-mb-6 tw-cursor-pointer"
            alt="groov-logo"
          />
          <SidebarMenu
            title="Task"
            href="/dashboard/tasks"
            :focus="tasksFocus || $route.path.includes('/dashboard/tasks')"
            @click="closeSidebar"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import SidebarMenu from "@/components/navigation/SidebarMenu.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MobileSidebar",

  components: { SidebarMenu },

  data() {
    return {
      tasksFocus: false,
    };
  },

  created() {},

  methods: {
    closeSidebar() {
      this.$refs.mobileSidebar.checked = false;
    },

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
#mobile-sidebar {
  @media (max-width: 1280px) {
    .navbar-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.3s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.3s ease-in-out;
    }

    .navbar .menu-items {
      transform: translate(-150%);
      transition: transform 0.5s ease-in-out;
    }

    .navbar .menu-items .faq-btn {
      left: 50%;
      transform: translate(-50%, 0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
      transform: rotate(38deg);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
      transform: rotate(-38deg);
    }
  }
}
</style>
