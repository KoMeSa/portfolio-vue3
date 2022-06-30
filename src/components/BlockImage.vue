<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 70,
  },
  height: {
    type: Number,
    default: 70,
  },
  src: {
    type: String,
    default: "",
  },
});

const setSize = computed(() => {
  return `width:${props.width}px; height:${props.height}px;`;
});
</script>

<template>
  <div class="block__image" :style="setSize">
    <img :src="src" alt="RK" />
  </div>
</template>

<style lang="scss" scoped>
.block__image {
  border: 1px solid $color-border;
  border-radius: 20%;
  background: $color-primary;
  position: relative;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>