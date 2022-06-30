<script setup>
import TagText from "../components/TagText.vue";
import BlockImage from "../components/BlockImage.vue";
import RButton from "../components/UI/RButton.vue";
import { homeTitle, homeText } from "@/helpers/letterArray";
</script>


<template>
  <div class="container">
    <div>
      <TagText
        :lettersArray="homeTitle"
        fontSize="50px"
        mBottom="20px"
      ></TagText>
      <TagText
        :lettersArray="homeText"
        tag="p"
        fontSize="25px"
        mBottom="40px"
      ></TagText>
      <div style="display: flex; justify-content: center">
        <RButton>Click on this button:)</RButton>
      </div>
    </div>
    <div>
       Here is block
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
