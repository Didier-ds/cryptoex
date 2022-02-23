<template>
  <div
    :class="size"
    class="rounded-sm flex items-center justify-center uppercase dark text-white font-medium">
    <span>{{ text }}</span>
  </div>
</template>
<script>
import { computed } from "vue";

export default {
  name: "ProfilePic",
  setup(props) {
    return {
      text: computed(() => {
        let letters = "";
        props.name.split(" ").forEach((word) => {
          letters += word.charAt(0);
        });
        return letters;
      }),
      size: computed(() => {
        switch (props.isSize) {
          case "small":
            return "h-12 w-12 ";
          case "mid":
            return "h-24 w-24 text-xl";

          case "big":
            return "h-32 h-32 text-2xl";

          default:
            return "h-12 h-12";
        }
      }),
    };
  },
  props: {
    name: {
      type: String,
      default: "OP",
    },
    isSize: {
      type: String,
      default: "mid",
    },
  },
};
</script>
