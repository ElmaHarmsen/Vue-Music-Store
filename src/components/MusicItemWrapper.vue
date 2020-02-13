<template>
  <div>
    <p>Helloooo!</p>
    <MusicItem />
  </div>
</template>

<script>
import MusicItem from "./MusicItem.vue";
export default {
  name: "MusicItemWrapper",
  components: {
    MusicItem: MusicItem
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-color: $throbbing-dark-color;
}
</style>
