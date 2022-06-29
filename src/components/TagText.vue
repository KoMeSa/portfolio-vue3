<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "Some text",
  },
  tag: {
    type: String,
    default: "h1",
  },
  fontSize: {
    type: String,
    default: "20px",
  },
  mBottom: {
    type: String,
    default: "0px",
  },
});
</script>



<template>
  <div class="block__text" :style="{ 'margin-bottom': mBottom }">
    <div class="block__text-tag">&#60;{{ tag }}&#62;</div>
    <div class="block__text-title" :style="{ 'font-size': fontSize }">
      {{ text }}
    </div>
    <div class="block__text-tag">&#60;{{ tag }}&#47;&#62;</div>
  </div>
</template>


<style lang="scss" scoped>
.block__text {
  .block__text-title {
    padding: 15px 25px;
    color: $color-white;
  }
  .block__text-tag {
    color: $color-gray;
  }
}
</style>