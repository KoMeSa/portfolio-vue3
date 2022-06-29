<script setup>
import { defineProps } from "vue";
const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span :class="{ 'rotate-180': collapsed }" class="collapsed-icon">
    <font-awesome-icon icon="fa-solid fa-angle-left"
  /></span>
</template>


<style lang="scss" scoped>
.collapsed-icon {
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  height: 20px;
  width: 20px;
  transition: 0.3s ease;
  color: $color-white;

  &:hover {
    color:  $color-link-hover;
  }
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>