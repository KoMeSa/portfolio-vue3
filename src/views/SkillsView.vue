<script setup>
import TagText from "../components/TagText.vue";
import TagSlot from "../components/TagSlot.vue";
import SlidersBlock from "../components/SlidersBlock.vue";
import SlideLine from "../components/SlideLine.vue";
import RButton from "../components/UI/RButton.vue";
import { skillsTitle, skillsText } from "@/helpers/letterArray";
</script>


<template>
  <div class="container">
    <div class="left-side">
      <TagSlot tag="body">
        <div style="padding: 50px">
          <TagText :lettersArray="skillsTitle" mBottom="20px"></TagText>
          <TagText :text="skillsText" tag="p" mBottom="40px"></TagText>
          <div style="display: flex; justify-content: center">
            <RButton>Contact me:)</RButton>
          </div>
        </div>
      </TagSlot>
    </div>
    <div class="right-side">
      <SlidersBlock />
    </div>
  </div>
</template>










