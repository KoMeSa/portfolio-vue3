<script setup>
import TagText from "../components/TagText.vue";
import SlideLine from "../components/SlideLine.vue";
</script>

<template>
  <div>
    <SlideLine text="Front-End" :stopNumber="97" colorLine="#5900CC" />
    <SlideLine
      text="VueJS"
      :stopNumber="90"
      colorLine="#73CC00"
      :timeout="200"
    />
    <SlideLine
      text="Nuxt js"
      :stopNumber="83"
      colorLine="#73CC00"
      :timeout="400"
    />
    <SlideLine
      text="Tailwindcss"
      :stopNumber="75"
      colorLine="#F9555F"
      :timeout="600"
    />
    <SlideLine
      text="ReactJS"
      :stopNumber="67"
      colorLine="#8383A6"
      :timeout="800"
    />
    <div class="card">
      <h2>Note</h2>
      I mainly worked with Rest API on projects, so I know well how to work with
      the backend and properly build the architecture of the frontend to work
      with endpoints.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin-top: 40px;
  h2 {
    margin-bottom: 14px;
  }
  padding: 20px;
  background: $color-block;
  border: 1px solid $color-border;
  border-radius: 8px;
}
</style>
