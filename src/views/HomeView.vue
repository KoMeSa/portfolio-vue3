<script setup>
import TagText from "../components/TagText.vue";
import RButton from "../components/UI/RButton.vue";
</script>


<template>
  <div class="container">
    <div>
      <TagText text="Ruslan Komesa" fontSize="40px" mBottom="20px"></TagText>
      <TagText
        text="Front-End Developer"
        tag="p"
        fontSize="20px"
        mBottom="40px"
      ></TagText>
      <div style="display: flex; justify-content: center">
        <RButton>Click on this button:)</RButton>
      </div>
    </div>
    <div>
      <div class="man">
        <img src="../assets/r.svg" alt="RK" />
      </div>
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

.man {
  width: 400px;
  height: 400px;
  border: 1px solid $color-border;
  border-radius: 20%;
  background: $color-primary;
  position: relative;

  img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
