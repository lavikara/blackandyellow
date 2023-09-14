<template>
  <div
    id="home-view"
    class="tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center"
  >
    <h1 class="tw-text-2xl">Fund wallet with pryme bank</h1>
    <span
      class="tw-text-white tw-bg-green tw-rounded-lg tw-cursor-pointer tw-p-4 tw-mt-4"
      @click="testSdk"
      >Fund wallet</span
    >
  </div>
</template>

<script setup>
import { fundWithVirtualAccount } from "@lavikara/testsdk";
import { useRouter } from "vue-router";

const router = useRouter();

const testSdk = () => {
  const details = {
    reference: "29F83ND82JD0",
    amount: "10000000",
    email: "customer@gmail.com",
    fullName: "Adewale Johnson",
    phone: "+2348144582144",
  };
  fundWithVirtualAccount("apiKey", details).then((response) => {
    console.log(response);
  });
};
</script>

<style lang="scss" scoped></style>
