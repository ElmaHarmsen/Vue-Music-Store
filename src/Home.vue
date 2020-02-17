<template>
  <div id="home">
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
  name: "Home",
  data: function() {
    return {
      smth: 0,
      //always a function with a return

      info: [
        {
          id: 0,
          title: "500 Miles",
          artist: "The Hooters",
          releaseDate: "2004",
          songs: "24",
          duration: "1hr 44min",
          price: "€5,-",
          inventory: 5,
          imageUrl: require("./assets/500-miles.jpg")
        },
        {
          id: 1,
          title: "Hell Freezes Over",
          artist: "Eagles",
          releaseDate: "1994",
          songs: "15",
          duration: "1hr 14min",
          price: "€8,-",
          inventory: 1,
          imageUrl: require("./assets/hell-freezes-over.jpg")
        },
        {
          id: 2,
          title: "The Division Bell",
          artist: "Pink Floyd",
          releaseDate: "1994",
          songs: "11",
          duration: "1hr 6min",
          price: "€7,-",
          inventory: 8,
          imageUrl: require("./assets/division-bell.jpg")
        },
        {
          id: 3,
          title: "Return to Forever",
          artist: "Scorpions",
          releaseDate: "2016",
          songs: "19",
          duration: "1hr 14min",
          price: "€11,-",
          inventory: 3,
          imageUrl: require("./assets/return-to-forever.jpg")
        },
        {
          id: 4,
          title: "L.A. Woman",
          artist: "The Doors",
          releaseDate: "1971",
          songs: "10",
          duration: "48min",
          price: "€6,-",
          inventory: 9,
          imageUrl: require("./assets/la-woman.jpg")
        },
        {
          id: 5,
          title: "Eagles",
          artist: "Eagles",
          releaseDate: "1972",
          songs: "10",
          duration: "37min",
          price: "€4",
          inventory: 5,
          imageUrl: require("./assets/eagles.jpeg")
        },
        {
          id: 6,
          title: "ABBA Gold",
          artist: "ABBA",
          releaseDate: "2008",
          songs: "19",
          duration: "1hr 18min",
          price: "€8",
          inventory: 1,
          imageUrl: require("./assets/abba-gold.jpg")
        },
        {
          id: 7,
          title: "Arrival",
          artist: "ABBA",
          releaseDate: "1976",
          songs: "12",
          duration: "41min",
          price: "€6",
          inventory: 6,
          imageUrl: require("./assets/arrival.png")
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

  .consistent-item-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: auto auto;
  }
}
</style>
