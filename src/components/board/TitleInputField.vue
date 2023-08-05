<template>
  <div id="title-input-field">
    <div class="tw-bg-green tw-rounded-lg tw-p-2">
      <form @submit.prevent="addTitle">
        <TextInput
          class="tw-text-xl"
          name="text"
          id="listTitle"
          placeHolder="Enter title"
          type="text"
          :inputStyle="inputStyle"
          @set="setTitle"
          @valid="setValid"
        />
        <div class="tw-flex tw-justify-between tw-items-center tw-mt-2">
          <button>
            <PlusBoxIcon
              class="tw-cursor-pointer"
              colour="#8791A7"
              width="24"
              height="24"
            />
          </button>
          <CloseBoxIcon
            class="tw-cursor-pointer tw-ml-"
            colour="#8791A7"
            width="24"
            height="24"
            @click="emit('clicked')"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import TextInput from "@/components/general/TextInput.vue";
import CloseBoxIcon from "@/components/icons/CloseBoxIcon.vue";
import PlusBoxIcon from "@/components/icons/PlusBoxIcon.vue";

const store = useStore();

let title = ref("");
const inputStyle = reactive({
  backgroundColor: "#ffffff",
  paddingTop: "2px",
  paddingBottom: "2px",
  paddingLeft: "8px",
});

const emit = defineEmits(["clicked"]);

const addTitle = () => {
  store.dispatch("taskModule/addTitle", {
    id: Date.now(),
    title: title.value,
    taskList: [],
  });
  title.value = "";
  emit("clicked");
};

const setTitle = (payload) => {
  title.value = payload;
};

const setValid = () => {};
</script>

<style lang="scss" scoped>
#title-input-field {
  @include fadeIn;
}
</style>
