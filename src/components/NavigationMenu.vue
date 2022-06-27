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
  <nav>
    <ul>
      <li v-for="(router, index) in routes" :key="index">
        <router-link :to="router.url">{{ router.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>