<script setup>
import { onMounted, computed } from "vue";
const TagCloud = require("TagCloud");

onMounted(() => {
  const container = ".tagcloud";
  const texts = [
    "HTML5",
    "SASS",
    "JavaScript",
    "CSS3",
    "Animation",
    "Vue js",
    "Nuxt js",
    "VUEX",
    "Store",
    "React js",
    "ES5/ES6+",
    "Tailwind css",
    "Git",
    "Node js",
    "npm",
    "Rest API",
  ];

  let options = {
    radius: 300,
  };

  TagCloud(container, texts, options);
});
</script>


<template>
  <div class="tagcloud"></div>
</template>


<style lang="scss" scoped>
.tagcloud {
  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>





