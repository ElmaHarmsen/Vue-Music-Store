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

    <PageIndicator v-bind:homePageNumbers="homePageNumber"></PageIndicator>
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

      cdInfo: [
        {
          id: 0,
          type: "cd",
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
          type: "cd",
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
          type: "cd",
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
          type: "cd",
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
          type: "cd",
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
          type: "cd",
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
          type: "cd",
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
          type: "cd",
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

      artistInfo: [
        {
          id: 0,
          type: "artist",
          name: "Eagles",
          songOne: "Hotel California",
          songTwo: "Take It Easy",
          songThree: "Life in the Fast Lane",
          imageUrl: require("./assets/artist-eagles.jpeg")
        },
        {
          id: 1,
          type: "artist",
          name: "ABBA",
          songOne: "Dancing Queen",
          songTwo: "Gimme! Gimme! Gimme!",
          songThree: "Mamma Mia",
          imageUrl: require("./assets/artist-eagles.jpeg")
        },
        {
          id: 2,
          type: "artist",
          name: "Scorpions",
          songOne: "Wind Of Change",
          songTwo: "Rock You Like A Hurricane",
          songThree: "Still Loving You",
          imageUrl: require("./assets/artist-eagles.jpeg")
        },
        {
          id: 3,
          type: "artist",
          name: "The Hooters",
          songOne: "500 Miles",
          songTwo: "All You Zombies",
          songThree: "Johhny B.",
          imageUrl: require("./assets/artist-eagles.jpeg")
        },
        {
          id: 4,
          type: "artist",
          name: "Pink Floyd",
          songOne: "Another Brick in the Wall, Pt.2",
          songTwo: "Wish You Were Here",
          songThree: "Comfortably Numb",
          imageUrl: require("./assets/artist-eagles.jpeg")
        },
        {
          id: 5,
          type: "artist",
          name: "The Doors",
          songOne: "Riders on the Storm",
          songTwo: "Light My Fire",
          songThree: "Break on Through(To the Other Side)",
          imageUrl: require("./assets/artist-eagles.jpeg")
        },
        {
          id: 6,
          type: "artist",
          name: "Alter Bridge",
          songOne: "Metalingus",
          songTwo: "Watch Over You",
          songThree: "Blackbird",
          imageUrl: require("./assets/artist-eagles.jpeg")
        },
        {
          id: 7,
          type: "artist",
          name: "Kansas",
          songOne: "",
          songTwo: "",
          songThree: "",
          imageUrl: require("./assets/artist-eagles.jpeg")
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
  computed: {
    musicItems: function() {
      let musicItemData = [];
      switch (this.homePageNumber) {
        case 1:
          musicItemData = this.cdInfo;
          break;

        case 2:
          musicItemData = this.artistInfo;
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
