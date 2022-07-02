<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "h1",
  },
});
</script>



<template>
  <div class="block__text" :style="{ 'margin-bottom': mBottom }">
    <div class="block__text-tag">&#60;{{ tag }}&#62;</div>
    <slot></slot>
    <div class="block__text-tag">&#60;{{ tag }}&#47;&#62;</div>
  </div>
</template>


<style lang="scss" scoped>
.block__text {
  .block__text-title {
    padding: 15px 25px;
    color: $color-white;
    max-width: 500px;
  }
  .block__text-tag {
    color: $color-gray;
  }
}
</style>