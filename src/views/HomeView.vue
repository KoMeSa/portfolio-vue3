<script setup>
import TagText from "../components/TagText.vue";
import BlockImage from "../components/BlockImage.vue";
import RButton from "../components/UI/RButton.vue";
</script>


<template>
  <div class="container">
    <div>
      <TagText text="Ruslan Komesa" fontSize="40px" mBottom="20px"></TagText>
      <TagText
        text="Front-End Developer"
        tag="p"
        fontSize="20px"
        mBottom="40px"
      ></TagText>
      <div style="display: flex; justify-content: center">
        <RButton>Click on this button:)</RButton>
      </div>
    </div>
    <div>
      <BlockImage
        :src="require('../assets/r.svg')"
        :width="400"
        :height="400"
      ></BlockImage>
    </div>
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
