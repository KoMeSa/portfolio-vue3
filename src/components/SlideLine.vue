<script setup>
import { ref, defineProps, onMounted } from "vue";
import SliderVue from "vue3-slider";

const props = defineProps({
  text: {
    type: String,
    default: "Text",
  },
  stopNumber: {
    type: Number,
  },
  colorLine: {
    type: String,
    default: "#FB278D",
  },
  timeout: {
    type: Number,
    default: 10
  },
});

const sliderNumber = ref(0);

onMounted(() => {
  setTimeout(() => {
    setInterval(() => {
      if (sliderNumber.value < props.stopNumber) {
        sliderNumber.value += 1;
      }
    }, 30);
  }, props.timeout);
});
</script>



<template>
  <div class="slide-line">
    <h2>{{ text }}</h2>
    <SliderVue
      :min="0"
      :max="100"
      v-model="sliderNumber"
      :color="colorLine"
      track-color="#FEFEFE"
    />
  </div>
</template>

<style lang="scss">
.slide-line {
  max-width: 600px;
  margin-bottom: 20px;
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
}
</style>