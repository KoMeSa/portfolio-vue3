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
  // border: 1px solid $color-border;
  // background: $color-primary;
  border: 1px solid $color-primary;
  border-radius: 20%;
  transform: rotate(45deg);
  position: relative;
  animation: rotblock 1s ease;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}

@keyframes rotblock {
    from{
      transform:scale(0.1) rotate(-360deg);
      opacity: 0.1;
    }to{
       transform:scale(1) rotate(45deg);

       opacity: 1;
    }
}
</style>