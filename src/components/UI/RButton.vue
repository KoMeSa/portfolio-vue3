<template>
  <button class="button"><slot></slot></button>
</template>

<style lang="scss" scoped>
.button {
  background: $color-primary;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.5s ease;

  &:hover {
    background: $color-button-hover;
  }

  &:active {
    background: $color-button-active;
  }
}
</style>