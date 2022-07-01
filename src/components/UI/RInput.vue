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
  <input type="typeField" class="custom-input" :placeholder="placeholder" />
</template>

<style lang="scss" scoped>
.custom-input {
  width: 100%;
  background: $color-input;
  padding: 15px 10px;
  border: 1px solid $color-border;
  margin: 10px 0px;
  border-radius: 6px;
}
</style>