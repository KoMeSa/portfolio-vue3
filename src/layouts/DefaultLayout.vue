<script setup>
import SideBar from "@/components/sidebar/SideBar.vue";
import { sidebarWidth } from "@/helpers/stateSiddeBar";

</script>

<template>
    <SideBar/>
    <div class="content" :style="{ 'margin-left': sidebarWidth }">
      <router-view></router-view>
    </div>
</template>


<style lang="scss">
  .content {
    transition: 0.3s ease;
    background:  $color-black;
  }
</style>