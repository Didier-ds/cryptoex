<template>
  <div
    :class="size"
    class="rounded-sm flex items-center justify-center uppercase dark text-white font-medium">
    <span>{{ text }}</span>
  </div>
</template>
<script setup>
// import { computed } from "vue"
import {usePage, computed} from '@/utils'
const props = defineProps({
    fullname: {
      type: String,
      default: "OP",
    },
    isSize: {
      type: String,
      default: "mid",
    },
  })
const text = computed(() => {
        let letters = "";
        usePage().props.value.user.fullname.split(" ").forEach((word) => {
          letters += word.charAt(0);
        });
        return letters;
      })
    const size = computed(() => {
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
      })
</script>
