<template>
  <div id="header">
    <div
      class="container tw-fixed tw-top-0 tw-right-0 tw-flex tw-items-center md:tw-justify-between xl:tw-w-full tw-justify-end tw-px-4 tw-bg-white tw-py-4 tw-z-20"
    >
      <WelcomeText class="tw-hidden md:tw-block md:tw-ml-20 xl:tw-ml-0" />
      <HeaderProfile />
    </div>
  </div>
</template>

<script>
import HeaderProfile from "@/components/navigation/header/HeaderProfile.vue";
import WelcomeText from "@/components/navigation/header/WelcomeText.vue";

export default {
  name: "Header",

  components: {
    HeaderProfile,
    WelcomeText,
  },
};
</script>

<style lang="scss" scoped>
#header {
  .container {
    width: 100%;

    @media screen and (min-width: 1280px) {
      width: calc(100% - #{$side-bar-width});
    }
  }
}
</style>
