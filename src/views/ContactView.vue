<script  setup>
import Card from "@/components/UI/RCard.vue";
import RInput from "@/components/UI/RInput.vue";
import RTextarea from "@/components/UI/RTextarea.vue";
import RButton from "@/components/UI/RButton.vue";
import TagSlot from "@/components/TagSlot.vue";
import TagText from "@/components/TagText.vue";
import SocialsBlock from "@/components/SocialsBlock.vue";
import RModal from "@/components/UI/RModal.vue";
import { contactTitle } from "@/helpers/letterArray";
import { ref } from "vue";
import { mySocials } from "@/helpers/mySocials";

const modalOpened = ref(false);

const openModal = () => {
  modalOpened.value = true;
};
</script>

<template>
  <RModal :modalOpened="modalOpened" @close="modalOpened = false">
    <p>Sorry, but this functionality is not working now.</p>
    <p style="margin-bottom: 20px">You can contact me on social media.</p>
    <a
      class="link"
      target="_blank"
      v-for="social in mySocials"
      :key="social.link"
      :href="social.link"
      ><font-awesome-icon :icon="social.icon" /><span>{{
        social.text
      }}</span></a
    >
  </RModal>
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
                <RButton @click.prevent="openModal">Send</RButton>
              </div>
            </form>
          </Card>
        </div>
      </TagSlot>
    </div>
    <div>
      <SocialsBlock></SocialsBlock>
    </div>
  </div>
</template>


<style lang="scss">
.link {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  text-decoration: none;

  span {
    margin-left: 20px;
    padding-bottom: 5px;
  }
  svg {
    height: 30px;
    width: 30px;
  }
}
</style>


