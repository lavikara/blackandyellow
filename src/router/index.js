import { createRouter, createWebHistory } from "vue-router";
const HomeView = () => import("@/views/HomeView.vue");
const OnboardingView = () => import("@/views/OnboardingView.vue");
const TaskView = () => import("@/views/TaskView.vue");

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
      name: "TaskView",
      component: TaskView,
      children: [
        {
          path: "",
          name: "DefaultTaskView",
          redirect: { name: "TaskPage" },
        },
        {
          path: "tasks",
          name: "TaskPage",
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */
              "@/layout/task/TaskPage.vue"
            ),
        },
      ],
    },
  ],
});

export default router;
