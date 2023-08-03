<template>
  <div id="header-profile" class="tw-retlative tw-flex tw-items-center">
    <div
      class="dropdown tw-relative tw-flex tw-flex-col tw-items-center tw-bg-gray-light tw-px-4 tw-py-2 tw-rounded tw-cursor-pointer"
    >
      <div class="tw-flex tw-items-center">
        <img
          class="tw-h-8 tw-mr-2"
          src="https://res.cloudinary.com/djalafcj9/image/upload/v1634012152/getequityV2/header-profile-img_kjtkcq.webp"
          alt="profile"
          loading="lazy"
        />
        <div class="syndicate-name tw-mr-4">
          <h3 class="tw-text-sm tw-hidden md:tw-inline-block">Temi</h3>
          <h3 class="tw-text-sm md:tw-hidden">Tayo</h3>
          <p class="tw-text-xs tw-text-gray-bg1">User</p>
        </div>
        <svg
          width="8"
          height="4"
          viewBox="0 0 8 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.00011 2.58602L6.47512 0.111023L7.18212 0.818023L4.00011 4.00002L0.818115 0.818023L1.52512 0.111023L4.00011 2.58602Z"
            fill="#8791A7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderProfile",
};
</script>

<style lang="scss" scoped>
#header-profile {
  .dropdown {
    .syndicate-name {
      @media screen and (min-width: 768px) {
        // min-width: 5rem;
      }
    }

    .menu {
      .list {
        transition: 0.3s ease all;

        &:hover {
          background-color: #375cb1;
          color: #ffffff;
        }
      }
    }

    &:hover .menu {
      display: block;
    }
  }
}
</style>
