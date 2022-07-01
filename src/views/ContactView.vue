<script  setup>
import Card from "@/components/UI/RCard.vue";
import RInput from "@/components/UI/RInput.vue";
import RTextarea from "@/components/UI/RTextarea.vue";
</script>

<template>
  <div class="container">
    <div>
      <Card>
        <h2>Contact me</h2>
        <RInput placeholder="Name"></RInput>
        <RInput placeholder="Surname"></RInput>
        <RTextarea placeholder="Message"></RTextarea>
      </Card>
    </div>
    <div></div>
  </div>
</template>