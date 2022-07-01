<script setup>
import { defineProps, computed } from "vue";
import logoBlue from "@/assets/logo-blue.svg";
import r from "@/assets/r.svg";
</script>

<template>
  <div class="block">
    <div class="block__image">
      <img :src="logoBlue" alt="RK" />
    </div>
    <div class="block__image bgBlue">
      <img :src="r" alt="RK" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: row;
  .block__image {
    border: 1px solid $color-border;
    position: relative;
    max-width: 250px;
    max-height: 250px;
    border: 1px solid $color-primary;
    border-radius: 20%;
    margin: 20px;
    animation: scaleRun 1s ease;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20%;
    }
  }
}

.bgBlue {
  background: $color-primary;
}

@keyframes scaleRun {
  0% {
    transform: scale(0.3);
    opacity: 0.3;
  }50%{
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}


// @keyframes rotblock {
//   from {
//     transform: scale(0.1) rotate(-360deg);
//     opacity: 0.1;
//   }
//   to {
//     transform: scale(1) rotate(0deg);
//     opacity: 1;
//   }
// }
</style>