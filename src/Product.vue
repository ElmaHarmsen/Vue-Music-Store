<template>
  <section>
    <NavbarBackground />

    <div class="pageTitle">
      <h1>{{ productData.title }}</h1>
    </div>

    <!-- <div
        data-trigger
        class="pageTitleBubble"
        v-if="productData.inventory === 0"
      >
        <h2 class="notToCartContent"></h2>
      </div>
      <div v-else data-trigger class="pageTitleBubble">
        <h2 class="toCartContent"></h2>
      </div> -->

    <div class="info-properties">
      <div
        class="left"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/' + productData.imageUrl) + ')'
        }"
      >
        <div></div>
      </div>
      <div class="right">
        <h2>{{ productData.title }}</h2>
        <ul>
          <li>By {{ productData.artist }}</li>
          <li>Released in {{ productData.releaseDate }}</li>
          <li>{{ productData.songs }} Songs</li>
          <li>{{ productData.duration }}</li>
        </ul>
        <h2 v-if="productData.inventory > 0">
          For only {{ productData.price }}
        </h2>
        <h2 v-else class="stock">Out of Stock</h2>
      </div>
    </div>

    <div class="cart">
      <div class="pageTitleBubble" v-if="productData.inventory === 0">
        <h2 class="notToCartContent"></h2>
      </div>
      <div v-else class="pageTitleBubble">
        <h2 class="toCartContent"></h2>
      </div>
    </div>

    <!-- <div class="headers">
        <h1>What others think</h1>
      </div> -->
    <!--End of div with class pageTitle-->
  </section>
</template>

<script>
import NavbarBackground from "./components/NavbarBackground.vue";
import ScrollTrigger from "@terwanerik/scrolltrigger";

export default {
  name: "Product",
  props: ["type", "title"],
  components: {
    NavbarBackground
  },
  data: function() {
    return {
      productData: null
    };
  },
  created: function() {
    const arrayOfSingle = require("./assets/MusicStoreData.json");
    this.productData = arrayOfSingle.musicStoreData
      .flat(2)
      .filter(
        singleObject =>
          singleObject.type === this.type && singleObject.title === this.title
      )
      .pop();
  },
  mounted: function() {
    const triggerBubble = new ScrollTrigger();
    triggerBubble.add("[data-trigger]");
  }
};
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  .pageTitle {
    text-align: center;

    h1 {
      color: $white-color;
      text-shadow: #9a151a 1px 0 10px;
      margin: 100px 0px 50px 0px;
    }
  }
  .info-properties {
    background: linear-gradient(
      135deg,
      $merlit-purple-color,
      $merlit-purple-color 60%,
      $bicycle-orange-color
    );
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px $throbbing-dark-color;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 75%;
    margin: auto auto;
    height: 80vh;
    margin-top: 50px;

    .left {
      align-self: center;
      height: 80vh;
      border-radius: 10px 0px 0px 10px;
      background-repeat: no-repeat;
      background-size: contain;
      flex-grow: 2;
    }
    .right {
      align-self: center;
      text-align: right;
      padding-right: 150px;

      ul {
        list-style: none;

        li {
          font-size: 30px;
          color: $white-color;
        }
      }

      h2 {
        font-size: 40px;
        color: $white-color;
      }
    }
  }
}
</style>
