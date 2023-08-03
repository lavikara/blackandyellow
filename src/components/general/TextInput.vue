<template>
  <div id="text-input">
    <input
      class="tw-w-full tw-rounded-lg"
      :style="inputStyle"
      @input="setInput"
      @keyup.enter="validate"
      @blur="validate"
      :type="type"
      :placeholder="placeHolder"
      :required="required"
      :name="name"
      :id="id"
      v-model="textData"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

// const store = useStore();

const emit = defineEmits(["set", "valid"]);

const props = defineProps({
  name: { type: String, default: () => "", required: true },
  id: { type: String, default: () => "", required: true },
  required: { type: Boolean, default: () => true },
  placeHolder: { type: String, default: () => "", required: true },
  type: { type: String, default: () => "text" },
  inputStyle: { type: Object, required: true },
});

let textData = ref("");
let textDataValid = ref();

// const screenSize = computed(() => {
//   return store.state.screenSize;
// });

const validate = () => {
  switch (props.type) {
    case "text":
      if (textData.value.length === 0) return emit("valid");
      break;

    default:
      break;
  }
};

const setInput = () => {
  emit("set", textData.value);
};
</script>

<style lang="scss" scoped>
#text-input {
  input::placeholder {
    color: #9ca3af;
  }
}
</style>
