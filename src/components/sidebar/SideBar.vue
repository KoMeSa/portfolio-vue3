<script setup>
import { routes } from "@/helpers/arrayRoutes";
import SideBarList from "@/components/sidebar/SideBarList.vue";
import ToggleItem from "@/components/sidebar/ToggleItem.vue";
import {
  collapsed,
  sidebarWidth,
  toggleSidebar,
} from "@/helpers/stateSiddeBar";
</script>

<template>
  <nav class="sidebar" :style="{ width: sidebarWidth }">
    <ToggleItem :collapsed="collapsed" @click="toggleSidebar" />
    <SideBarList :routes="routes" :collapsed="collapsed" />
  </nav>
</template>


<style lang="scss">
.sidebar {
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: $color-background;
  border-right: 1px solid $color-text-business-black;

  box-sizing: border-box;
  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>