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
  background: linear-gradient(
    135deg,
    $merlit-purple-color,
    $merlit-purple-color 60%,
    $bicycle-orange-color
  );
  padding: 20px;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  box-shadow: 0 8px 6px -6px $throbbing-dark-color;
  margin: 0px 0px 50px 0px;

  img {
    height: 250px;
    width: auto;
  }

  ul {
    list-style: none;
    text-align: left;
    padding: 20px;

    li {
      font-family: "segoe-ui";
      color: $white-color;
      font-size: 18px;
    }
  }
}
</style>
