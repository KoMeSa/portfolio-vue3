<script setup>
import { mySocials } from "@/helpers/mySocials";
</script>



<template>
  <div class="socials-block">
    <a
      class="socials"
      target="_blank"
      v-for="social in mySocials"
      :key="social.link"
      :href="social.link"
      ><font-awesome-icon :icon="social.icon" /><span>{{
        social.text
      }}</span></a
    >
  </div>
</template>


<style lang="scss">
.socials-block {
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: center;
  // align-items: start;
  // padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 5%;
  padding: 20px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 0;
  }

  .socials {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid $color-border;
    // max-width: 90%;
    // width: 100%;
    margin-bottom: 20px;
    text-decoration: none;
    background: $color-block;

    &:hover {
      background: $color-border;
      transition: 1s ease;
    }

    span {
      margin-left: 20px;
    }

    svg {
      height: 40px;
      width: 40px;
      path {
        fill: $color-secondary;
      }
    }
  }
}
</style>