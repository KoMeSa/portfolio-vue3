<script setup>
import TagText from "../components/TagText.vue";
import SlideLine from "../components/SlideLine.vue";
import RCard from "../components/UI/RCard.vue";
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
    <RCard>
      <h2>Note</h2>
      I mainly worked with Rest API on projects, so I know well how to work with
      the backend and properly build the architecture of the frontend to work
      with endpoints.
    </RCard>
  </div>
</template>

