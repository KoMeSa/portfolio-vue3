<script setup>
import { defineProps } from "vue";
const props = defineProps({
  routes: {
    type: Array,
    default: [],
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <ul class="sidebar__list">
    <li class="sidebar__item" v-for="(router, index) in routes" :key="index">
      <router-link class="sidebar__item-link" :to="router.url"
        ><font-awesome-icon color="#a0afa0" :icon="router.icon" />
        <span v-show="!collapsed">{{ router.title }}</span>
      </router-link>
    </li>
  </ul>
</template>


<style lang="scss">
.sidebar__list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: 40px;

  .sidebar__item {
    list-style: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.5s ease;
    border-left: 1px solid transparent;
    border: 1px solid transparent;
    border-radius: 7px;

    &:hover {
      border: 1px solid #37b453;
      .sidebar__item-link {
        color: #37b453;
        svg {
          path {
            fill: #37b453;
          }
        }
      }
    }
    .sidebar__item-link {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      padding: 15px 10px;
      color: #a0afa0;
      text-decoration: none;

      span {
        margin-left: 10px;
      }
    }
  }
}
</style>