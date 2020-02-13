<template>
  <section>
    <img v-bind:src="single.imageUrl" alt="" />
    <ul>
      <li>{{ single.title }}</li>
      <li>{{ single.artist }}</li>
      <li>{{ single.releaseDate }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MusicItem",
  props: ["single"]
};
</script>

<style lang="scss" scoped>
section {
  background-color: $throbbing-dark-color;
  padding: 20px;

  ul {
    list-style: none;
    text-align: left;

    li {
      font-family: "segoe-ui";
      color: $defenders-red-color;
      font-size: 18px;
    }
  }
}
</style>
