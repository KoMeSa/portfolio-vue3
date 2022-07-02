<script setup>
import TagText from "../components/TagText.vue";
import TagSlot from "../components/TagSlot.vue";
import BlockImage from "../components/BlockImage.vue";
import RButton from "../components/UI/RButton.vue";
import { homeTitle, homeText } from "@/helpers/letterArray";
import logoBlue from "@/assets/logo-blue.svg";
import logo from "@/assets/logo.svg";
</script>


<template>
  <div class="container">
    <div class="left-side">
      <TagSlot tag="body">
        <div style="padding: 50px;">
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
            <RButton>About me:)</RButton>
          </div>
        </div>
      </TagSlot>
    </div>
    <div>
      <BlockImage />
    </div>
  </div>
</template>

