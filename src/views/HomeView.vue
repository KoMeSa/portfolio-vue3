<script setup>
import TagText from "../components/TagText.vue";
import BlockImage from "../components/BlockImage.vue";
import RButton from "../components/UI/RButton.vue";
import { homeTitle, homeText } from "@/helpers/letterArray";
import logoBlue from  '@/assets/logo-blue.svg'
import logo from  '@/assets/logo.svg'
</script>


<template>
  <div class="container">
    <div class="left-side">
      <TagText
        :lettersArray="homeTitle"
        fontSize="50px"
        mBottom="20px"
      ></TagText>
      <TagText
        :text="homeText"
        tag="p"
        fontSize="20px"
        mBottom="40px"
      ></TagText>
      <div style="display: flex; justify-content: center">
        <RButton>Click on this button:)</RButton>
      </div>
    </div>
    <div>
      <BlockImage/>
    </div>
  </div>
</template>

