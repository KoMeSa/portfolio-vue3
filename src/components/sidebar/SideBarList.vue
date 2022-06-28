<script setup>
import { defineProps } from "vue";
const props = defineProps({
  routes: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <ul class="sidebar__list">
    <li class="sidebar__item" v-for="(router, index) in routes" :key="index">
      <router-link :to="router.url">{{ router.title }}</router-link>
    </li>
  </ul>
</template>


<style lang="scss">
.sidebar__list {
  .sidebar__item {
    list-style: none;
    a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>