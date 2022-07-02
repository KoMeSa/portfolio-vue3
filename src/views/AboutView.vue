<script setup>
import TagText from "../components/TagText.vue";
import TagSlot from "@/components/TagSlot.vue";
import CloudTag from "../components/CloudTag.vue";
import RButton from "../components/UI/RButton.vue";
import { aboutTitle, aboutText } from "@/helpers/letterArray";
</script>


<template>
  <div class="container">
    <div class="left-side">
      <TagSlot tag="body">
        <div style="padding: 50px">
          <TagText
            :lettersArray="aboutTitle"
            fontSize="50px"
            mBottom="20px"
          ></TagText>
          <TagText
            :text="aboutText"
            tag="p"
            fontSize="20px"
            mBottom="40px"
          ></TagText>
          <div style="display: flex; justify-content: center">
            <RButton>My skills:)</RButton>
          </div>
        </div>
      </TagSlot>
    </div>
    <div>
      <CloudTag />
    </div>
  </div>
</template>


