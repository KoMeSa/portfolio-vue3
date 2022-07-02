<script  setup>
import Card from "@/components/UI/RCard.vue";
import RInput from "@/components/UI/RInput.vue";
import RTextarea from "@/components/UI/RTextarea.vue";
import RButton from "@/components/UI/RButton.vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { styles, key } from "@/helpers/googleMap";

const center = { lat: 50.6199, lng: 26.2516 };
const markerOptions = { position: center, label: "R", title: "LADY LIBERTY" };
</script>

<template>
  <div class="container">
    <div class="left-side">
      <Card>
        <h2>Contact me</h2>
        <RInput placeholder="Name"></RInput>
        <RInput placeholder="Surname"></RInput>
        <RTextarea placeholder="Message"></RTextarea>
        <div style="display: flex; justify-content: center">
          <RButton>Send</RButton>
        </div>
      </Card>
    </div>
    <div>
      <GoogleMap
        :api-key="key"
        style="width: 100%; height: 100vh"
        :center="center"
        :zoom="6"
        :styles="styles"
        :mapTypeControl="false"
      >
        <Marker :options="markerOptions" />
      </GoogleMap>
    </div>
  </div>
</template>