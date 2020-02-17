<template>
  <router-link to="/product" class="router-link">
    <section>
      <img v-bind:src="single.imageUrl" alt="" />
      <ul>
        <li>{{ single.title }}</li>
        <li>{{ single.artist }}</li>
        <li>{{ single.releaseDate }}</li>
        <li>{{ albumLength }}</li>
      </ul>
      <p v-if="single.inventory > 3">{{ single.price }}</p>
      <p v-else-if="single.inventory < 3 && single.inventory > 0" class="stock">
        Almost sold out!
      </p>
      <p v-else class="stock">Out of Stock</p>
    </section>
  </router-link>
</template>

<script>
export default {
  name: "MusicItem",
  props: ["single"],
  computed: {
    albumLength: function() {
      return this.single.songs + " songs," + " " + this.single.duration;
    }
  }
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
  margin: 50px 0px 50px 0px;

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
  p {
    color: $white-color;
    font-family: "dancing-script";
    font-size: 25px;
    margin: 0;
  }
  .stock {
    color: $grey-color;
  }
}
</style>
