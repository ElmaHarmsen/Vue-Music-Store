<template>
  <router-link
    v-bind:to="`/product/${single.type}/${single.title}`"
    class="router-link"
  >
    <section>
      <img v-bind:src="require('@/assets/' + single.imageUrl)" alt="" />
      <div v-if="single.type === 'album'">
        <p>{{ single.title }}</p>
        <ul>
          <li>{{ single.artist }}</li>
          <li>{{ single.releaseDate }} | {{ albumLength }}</li>
        </ul>
        <p v-if="single.inventory > 3">{{ single.price }}</p>
        <p
          v-else-if="single.inventory < 3 && single.inventory > 0"
          class="stock"
        >
          Almost sold out!
        </p>
        <p v-else class="stock">Out of Stock</p>
      </div>

      <div v-if="single.type === 'artist'">
        <p>{{ single.name }}</p>
        <ul>
          <li v-html="popularSongs"></li>
        </ul>
      </div>
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
    },
    popularSongs: function() {
      return `
        <li>Popular Songs:</li>
        <li>${this.single.songOne}</li>
        <li>${this.single.songTwo}</li>
        <li>${this.single.songThree}</li>
        `;
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
  height: 450px;
  justify-content: space-between;

  img {
    width: 250px;
    height: auto;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 10px;
    margin: 0px;

    li {
      font-family: "segoe-ui";
      color: $white-color;
      font-size: 18px;
    }
  }
  p {
    color: $white-color;
    font-family: "dancing-script";
    font-size: 30px;
    margin: 0px;
    padding: 10px 0px;
  }
}
</style>
