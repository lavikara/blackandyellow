<template>
  <ul id="sidebar-menu">
    <li>
      <router-link :to="href">
        <div
          class="tw-flex tw-py-5 tw-cursor-pointer tw-rounded-lg hover:tw-text-primary tw-pl-8"
          :class="[
            focus === true
              ? 'tw-text-primary tw-bg-gray-light'
              : 'tw-text-gray',
          ]"
        >
          <svg
            v-if="title === 'Board'"
            class="svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
              :fill="$route.path.includes('/board') ? '#2BD5D4' : '#8791A7'"
            />
          </svg>
          <svg
            v-if="title === 'Settings'"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5H11V14H8V17H6V14H3V5H6V2H8V5ZM18 10H21V19H18V22H16V19H13V10H16V7H18V10Z"
              :fill="$route.path.includes('settings') ? '#2BD5D4' : '#8791A7'"
            />
          </svg>
          <span class="tw-font-semibold tw-pl-5">
            {{ title }}
          </span>
        </div>
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
