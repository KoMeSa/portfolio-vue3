<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
import { sidebarWidth } from "@/helpers/stateSiddeBar";

</script>

<template>
  <div class="default">
    <SideBar :routes="routes" />
    <div class="main-container" :style="{ 'margin-left': sidebarWidth }">
      <router-view></router-view>
    </div>
  </div>
</template>


<style lang="scss">
.default {
  // display: flex;
  // flex-direction: row;
  .main-container {
    // padding: 0 50px;
  }
}
</style>