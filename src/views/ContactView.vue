<script  setup>
import Card from "@/components/UI/RCard.vue";
import RInput from "@/components/UI/RInput.vue";
import RTextarea from "@/components/UI/RTextarea.vue";
import RButton from "@/components/UI/RButton.vue";
import TagSlot from "@/components/TagSlot.vue";
import MapBlock from "@/components/MapBlock.vue";
import TagText from "@/components/TagText.vue";
import { contactTitle } from "@/helpers/letterArray";
</script>

<template>
  <div class="container">
    <div class="left-side">
      <TagSlot tag="body">
        <div style="padding: 50px">
          <TagText tag="h1" :lettersArray="contactTitle"></TagText>
          <Card>
            <form>
              <RInput placeholder="Name"></RInput>
              <RInput placeholder="Surname"></RInput>
              <RTextarea placeholder="Message"></RTextarea>
              <div style="display: flex; justify-content: center">
                <RButton>Send</RButton>
              </div>
            </form>
          </Card>
        </div>
      </TagSlot>
    </div>
    <div class="hide-map">
      <MapBlock></MapBlock>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.hide-map {
   @media screen and (max-width: 1200px) {
       display: none;
    }
}
</style>


