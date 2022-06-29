<script setup>
import TagText from '../components/TagText.vue'
</script>


<template>
  <div class="container">
    <div>
      <TagText text="Ruslan Komesa" fontSize="40px" mBottom="20px"></TagText>
      <TagText text="Front-End developer" tag="p" fontSize="20px"></TagText>
    </div>
    <div>Second block</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  justify-items: center;
  align-items: center;
}
</style>
