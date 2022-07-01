<script setup>
import { defineProps } from "vue";

const props = defineProps({
  typeField: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Field",
  },
});
</script>


<template>
  <textarea :placeholder="placeholder" name="" id="" rows="8" class="custom-tex"></textarea>
</template>

<style lang="scss">
.custom-tex {
  width: 100%;
  background: $color-input;
  padding: 15px 10px;
  border: 1px solid $color-border;
  margin: 10px 0px;
  border-radius: 6px;
}
</style>