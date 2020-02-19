<template>
  <div id="home">
    <NavBar />

    <HelloWorld />

    <div class="music-item-wrapper">
      <MusicItem
        v-for="listitem in musicItems"
        v-bind:key="listitem.id"
        v-bind:single="listitem"
      ></MusicItem>
    </div>

    <PageIndicator
      v-bind:homePageNumbers="homePageNumber"
      v-bind:totalPages="jsonData.length"
    ></PageIndicator>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import MusicItem from "./components/MusicItem.vue";
import PageIndicator from "./components/PageIndicator.vue";

export default {
  name: "Home",
  data: function() {
    return {
      smth: 0,
      //always a function with a return

      homePageNumber: 1,

      consistentButton: [
        {
          id: 1,
          content: "CD's"
        },
        {
          id: 2,
          content: "LP's"
        },
        {
          id: 3,
          content: "Artists"
        }
      ],

      jsonData: []
    };
  },
  computed: {
    musicItems: function() {
      let musicItemData = [];
      switch (this.homePageNumber) {
        case 1:
          console.log(this.jsonData[0]);
          musicItemData = this.jsonData[0];
          break;

        case 2:
          musicItemData = this.jsonData[1];
          break;
      }
      return musicItemData;
    }
  },
  components: {
    HelloWorld,
    NavBar,
    MusicItem,
    PageIndicator
  },
  created: function() {
    //always a function
    setInterval(() => {
      this.smth = Math.random();
    }, 1000);
    const rawData = require("./assets/MusicStoreData.json");
    this.jsonData = rawData.musicStoreData;
  }
  // watch: {
  //   smth: function(theNewValue, theValueItWasBefore) {
  //     console.log(
  //       `The old value was: ${theValueItWasBefore}, the new one is ${theNewValue}`
  //     );
  //   }
  // }
};
</script>

<style lang="scss">
#home {
  text-align: center;
  display: flex;
  flex-flow: column nowrap;

  .music-item-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: auto auto;
    width: 75%;
    flex-basis: 25%;
  }
}
</style>
