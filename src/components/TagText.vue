<script setup>
import { defineProps } from "vue";

const props = defineProps({
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
  lettersArray: { type: Array, default: [] },
});
</script>



<template>
  <div class="block__text" :style="{ 'margin-bottom': mBottom }">
    <div class="block__text-tag">&#60;{{ tag }}&#62;</div>
    <div class="block__text-title" :style="{ 'font-size': fontSize }">
      <span
        class="letter"
        v-for="(letter, index) in lettersArray"
        :key="index"
        v-html="letter"
      ></span>
    </div>
    <div class="block__text-tag">&#60;{{ tag }}&#47;&#62;</div>
  </div>
</template>


<style lang="scss">
.block__text {
  .block__text-title {
    padding: 15px 25px;
    color: $color-white;
    animation: left-text 1s ease;

    .letter {
      display: inline-block;
      &:hover {
        cursor: pointer;
        color: $color-secondary;
        animation: bounce 0.7s ease;
      }
    }
  }
  .block__text-tag {
    color: $color-gray;
  }
}

@keyframes bounce {
  25% {
    transform: scale(0.8, 1.3);
  }
  50% {
    transform: scale(1.1, 0.8);
  }
  75% {
    transform: scale(0.7, 1.2);
  }
}

@keyframes left-text {
  from {
    opacity: 0;
    transform: scale(0.3) translate(-400px);
  }
  to {
    transform: scale(1) translate(0px);
    opacity: 1;
  }
}
</style>