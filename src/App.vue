<template>
  <div id="app">
    <NavBar />

    <HelloWorld />

    <div class="music-item-wrapper">
      <MusicItem
        v-for="listitem in info_1"
        v-bind:key="listitem.id"
        v-bind:single="listitem"
      ></MusicItem>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import MusicItem from "./components/MusicItem.vue";

export default {
  name: "App",
  data: function() {
    return {
      smth: 0,
      //always a function with a return

      info_1: [
        {
          id: 0,
          title: "Bohemian Rhapsody",
          artist: "Queen",
          releaseDate: "October 31, 1975",
          imageUrl: require("./assets/bohemian-rhapsody.png")
        },
        {
          id: 1,
          title: "Hotel California",
          artist: "Eagles",
          releaseDate: "1094",
          imageUrl: require("./assets/logo.png")
        }
      ]
    };
  },
  components: {
    HelloWorld,
    NavBar,
    MusicItem
  },
  created: function() {
    //always a function
    setInterval(() => {
      this.smth = Math.random();
    }, 1000);
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
#app {
  text-align: center;

  .music-item-wrapper {
    display: flex;
    flex-flow: row;
    flex-basis: 33%;
    justify-content: space-evenly;
    margin: 0px 50px;
  }
}

body {
  margin: 0px;
}
p {
  font-family: "segoe-ui";
  font-size: 18px;
}
</style>
