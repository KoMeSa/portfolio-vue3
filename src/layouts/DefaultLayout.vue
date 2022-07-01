<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
import { sidebarWidth } from "@/helpers/stateSiddeBar";
</script>

<template>
  <div class="content" :style="{ 'margin-left': sidebarWidth }">
  <SideBar />
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
.content {
  transition: 0.3s ease;
  background: $color-background;
}
</style>