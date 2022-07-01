<template>
  <div class="card">
    <slot></slot>
  </div>
</template>


<style lang="scss" scoped>
.card {
  padding: 25px 20px;
  background: $color-block;
  border: 1px solid $color-border;
  border-radius: 8px;
  margin-top: 40px;
  h2 {
    margin-bottom: 10px;
  }
}
</style>