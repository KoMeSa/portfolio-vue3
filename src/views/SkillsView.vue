<script setup>
import TagText from "../components/TagText.vue";
import RButton from "../components/UI/RButton.vue";
import { skillsTitle, skillsText } from "@/helpers/letterArray";
</script>


<template>
  <div class="container">
    <div>
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
      Here is asasdassd
    </div>
  </div>
</template>






