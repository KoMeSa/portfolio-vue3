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
          <TagText :lettersArray="skillsTitle"></TagText>
          <TagText :text="skillsText" tag="p"></TagText>
          <div style="display: flex; justify-content: center">
            <router-link to="/contact">
              <RButton>Contact me:)</RButton>
            </router-link>
          </div>
        </div>
      </TagSlot>
    </div>
    <div class="right-side">
      <SlidersBlock />
    </div>
  </div>
</template>










