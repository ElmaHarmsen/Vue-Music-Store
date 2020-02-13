<template>
  <div>
    <p>Helloooo!</p>
  </div>
</template>

<script>
// import MusicItem from "./MusicItem.vue";
export default {
  name: "MusicItemWrapper"
  //   components: {
  //     'MusicItem': MusicItem
  //   },
  //     props: {
  //         info_1: Array,
  //         info_2: Array
  //     }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  background-color: $throbbing-dark-color;

  p {
    color: $white-color;
  }
}
</style>
