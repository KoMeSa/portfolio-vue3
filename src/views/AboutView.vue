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
          <TagText :lettersArray="aboutTitle" mBottom="20px"></TagText>
          <TagText :text="aboutText" tag="p" mBottom="40px"></TagText>
          <div style="display: flex; justify-content: center">
            <RButton>My skills:)</RButton>
          </div>
        </div>
      </TagSlot>
    </div>
    <div class="right-side">
      <CloudTag />
    </div>
  </div>
</template>


