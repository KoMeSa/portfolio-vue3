<script setup>
import TagText from "../components/TagText.vue";
import SlidersBlock from "../components/SlidersBlock.vue";
import SlideLine from "../components/SlideLine.vue";
import RButton from "../components/UI/RButton.vue";
import { skillsTitle, skillsText } from "@/helpers/letterArray";
</script>


<template>
  <div class="container">
    <div class="left-side">
      <TagText
        :lettersArray="skillsTitle"
        fontSize="50px"
        mBottom="20px"
      ></TagText>
      <TagText
        :text="skillsText"
        tag="p"
        fontSize="20px"
        mBottom="40px"
      ></TagText>
      <div style="display: flex; justify-content: center">
        <RButton>Click on this button:)</RButton>
      </div>
    </div>
    <div>
      <SlidersBlock />
    </div>
  </div>
</template>









