import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("@/views/HomeView.vue");
const OnboardingView = () => import("@/views/OnboardingView.vue");
const BoardView = () => import("@/views/BoardView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "HomePage",
      component: HomeView,
    },
    {
      path: "/onboarding",
      name: "OnboardingView",
      component: OnboardingView,
      children: [
        {
          path: "",
          name: "DefaultOnboardingView",
          redirect: { name: "SignIn" },
        },
        {
          path: "/onboarding/signin",
          name: "SignIn",
          component: () =>
            import(
              /* webpackChunkName: "onboarding" */
              "@/layout/onboarding/SignIn.vue"
            ),
        },
      ],
    },
    {
      path: "/dashboard",
      name: "BoardView",
      component: BoardView,
      children: [
        {
          path: "",
          name: "DefaultBoardView",
          redirect: { name: "BoardPage" },
        },
        {
          path: "board",
          name: "BoardPage",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */
              "@/layout/board/BoardPage.vue"
            ),
        },
        {
          path: "settings",
          name: "Settings",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */
              "@/layout/board/Settings.vue"
            ),
        },
      ],
    },
  ],
});

export default router;
