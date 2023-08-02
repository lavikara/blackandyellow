<template>
  <ul id="sidebar-menu">
    <li>
      <router-link
        :to="href"
        class="tw-flex tw-py-5 tw-cursor-pointer hover:tw-text-primary tw-pl-8"
        :class="[focus === true ? 'tw-text-primary' : 'tw-text-gray']"
      >
        <svg
          v-if="title === 'Task'"
          class="svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
            :fill="$route.path.includes('tasks') ? '#4D84FF' : '#8791A7'"
          />
        </svg>

        <span class="tw-pl-5">
          {{ title }}
        </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SidebarMenu",

  props: {
    title: { type: String, default: () => "", required: true },
    href: { type: String, default: () => "" },
    focus: { type: Boolean, default: () => false },
  },
};
</script>

<style lang="scss" scoped></style>
