<script setup>
import NavigationMenu from "@/components/NavigationMenu.vue";

const routes = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
];
</script>

<template>
  <div class="default">
    <NavigationMenu :routes="routes" />
    <router-view></router-view>
  </div>
</template>


<style lang="scss">
 .default {
  display: flex;
  flex-direction: row;
 }
</style>