<template>
  <div id="app">
    <NavBar />

    <HelloWorld />

    <div class="consistent-item-wrapper">
      <ConsistentButton
        v-for="btnitem in consistentButton"
        v-bind:key="btnitem.id"
        v-bind:btnContent="btnitem"
      ></ConsistentButton>
    </div>

    <div class="music-item-wrapper">
      <MusicItem
        v-for="listitem in info"
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
import ConsistentButton from "./components/ConsistentButton.vue";

export default {
  name: "App",
  data: function() {
    return {
      smth: 0,
      //always a function with a return

      info: [
        {
          id: 0,
          title: "Bohemian Rhapsody",
          artist: "Queen",
          releaseDate: "1975",
          imageUrl: require("./assets/bohemian-rhapsody.png")
        },
        {
          id: 1,
          title: "Hotel California",
          artist: "Eagles",
          releaseDate: "1094",
          imageUrl: require("./assets/hotel-california.png")
        },
        {
          id: 2,
          title: "November Rain",
          artist: "Guns N' Roses",
          releaseDate: "1987",
          imageUrl: require("./assets/november-rain.jpg")
        },
        {
          id: 3,
          title: "Boulevard of Broken Dreams",
          artist: "Green Day",
          releaseDate: "2004",
          imageUrl: require("./assets/boulevard-broken-dreams.jpeg")
        },
        {
          id: 4,
          title: "Boulevard of Broken Dreams",
          artist: "Green Day",
          releaseDate: "2004",
          imageUrl: require("./assets/boulevard-broken-dreams.jpeg")
        }
      ],

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
      ]
    };
  },
  components: {
    HelloWorld,
    NavBar,
    MusicItem,
    ConsistentButton
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

  .consistent-item-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: auto auto;
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
