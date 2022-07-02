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
          <TagText
            tag="h1"
            :lettersArray="contactTitle"
            fontSize="50px"
          ></TagText>
          <Card>
            <RInput placeholder="Name"></RInput>
            <RInput placeholder="Surname"></RInput>
            <RTextarea placeholder="Message"></RTextarea>
            <div style="display: flex; justify-content: center">
              <RButton>Send</RButton>
            </div>
          </Card>
        </div>
      </TagSlot>
    </div>
    <div>
      <MapBlock></MapBlock>
    </div>
  </div>
</template>\


