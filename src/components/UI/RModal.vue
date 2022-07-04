<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  modalOpened: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);
</script>


<template>
  <div class="modal-wrapper" v-if="modalOpened" @click="emit('close')">
    <div class="modal-content" @click.stop>
      <font-awesome-icon icon="fa-solid fa-xmark" class="hide" @click="emit('close')"/>
      <slot></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.modal-wrapper {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $color-black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($color-background, 0.5);

  .modal-content {
    min-width: 300px;
    min-height: 200px;
    background: $color-block;
    border: 1px solid $color-border;
    border-radius: 8px;
    padding: 25px;
    position: relative;

    .hide {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
}
</style>