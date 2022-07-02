<script setup>
import { GoogleMap, Marker, InfoWindow, CustomMarker } from "vue3-google-map";
import { styles, key, center } from "@/helpers/googleMap";
import logo from "@/assets/logo.svg";
</script>

<template>
  <GoogleMap
    :api-key="key"
    style="width: 100%; height: 100vh"
    :center="center"
    :zoom="6"
    :styles="styles"
    :mapTypeControl="false"
  >
    <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
      <div class="marker">
        <img :src="logo" width="100" height="100" />
        <div class="branch"></div>
      </div>
    </CustomMarker>
  </GoogleMap>
</template>

<style lang="scss" scoped>
.marker {
  padding-bottom: 30px;
  border-radius: 100%;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .branch {
    position: absolute;
    display: inline-block;
    background: $color-secondary;
    width: 3px;
    height: 20px;
    bottom: 15px;
  }
}
</style>