<template>
  <section>
    <div id="mobile_home">
      <h1>In Progress</h1>
      <div>
        <p>
          The mobile version of the Formidable Music Store is being made, and
          will soon be online.
        </p>
        <p>Please visit this website on a laptop.</p>
      </div>
    </div>
    <div id="home">
      <NavBar />

      <HelloWorld />

      <div class="pageTitle">
        <h1>{{ pageTitles }}</h1>
        <div data-trigger class="pageTitleBubble">
          <h2>{{ pageTitlesBubble }}</h2>
        </div>

        <div class="music-item-wrapper">
          <MusicItem
            v-for="listitem in musicItems"
            v-bind:key="listitem.id"
            v-bind:single="listitem"
          ></MusicItem>
        </div>
      </div>

      <PageIndicator
        v-bind:homePageNumbers="homePageNumber"
        v-bind:totalPages="jsonData.length"
        v-on:increasePage="homePageNumber += $event"
        v-on:decreasePage="homePageNumber -= $event"
      ></PageIndicator>

      <ReceiverHome> </ReceiverHome>

      <Footer />
    </div>
  </section>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import MusicItem from "./components/MusicItem.vue";
import PageIndicator from "./components/PageIndicator.vue";
import ReceiverHome from "./components/ReceiverHome.vue";
import Footer from "./components/Footer.vue";

import ScrollTrigger from "@terwanerik/scrolltrigger";

export default {
  name: "Home",
  data: function() {
    return {
      smth: 0,

      homePageNumber: 1,

      jsonData: []
    };
  },
  computed: {
    musicItems: function() {
      let musicItemData = [];
      switch (this.homePageNumber) {
        case 1:
          musicItemData = this.jsonData[0];
          break;

        case 2:
          musicItemData = this.jsonData[1];
          break;
      }
      return musicItemData;
    },
    pageTitles: function() {
      let pageTitle = "";
      if (this.musicItems[0].type === "album") {
        return "You are currently looking at our top CD's";
      }
      if (this.musicItems[1].type === "artist") {
        return "These are some of the best Artists";
      }
      return pageTitle;
    },
    pageTitlesBubble: function() {
      let pageTitleBubble = "";
      if (this.musicItems[0].type === "album") {
        return "Cd's";
      }
      if (this.musicItems[1].type === "artist") {
        return "Artists";
      }
      return pageTitleBubble;
    }
  },
  components: {
    HelloWorld,
    NavBar,
    MusicItem,
    PageIndicator,
    ReceiverHome,
    Footer
  },
  created: function() {
    setInterval(() => {
      this.smth = Math.random();
    }, 1000);
    const rawData = require("./assets/MusicStoreData.json");
    this.jsonData = rawData.musicStoreData;
  },
  mounted: function() {
    const triggerBubble = new ScrollTrigger();
    triggerBubble.add("[data-trigger]");
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
section {
  #mobile_home {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    h1 {
      color: $white-color;
      text-shadow: #9a151a 1px 0 10px;
      font-size: 55px;
    }
    div {
      text-align: left;
      margin: 50px 25px;
      p {
        padding: 5px 0px;
      }
    }
  }
  #home {
    display: none;
  }
}
@media screen and(min-width: 700px) {
  section {
    #mobile_home {
      display: none;
    }
    #home {
      text-align: center;
      display: flex;
      flex-flow: column nowrap;
    }
    .pageTitle {
      h1 {
        color: $white-color;
        text-shadow: #9a151a 1px 0 10px;
        margin: 100px 0px 50px 0px;
      }
      .pageTitleBubble {
        border: 5px solid $white-color;
        border-radius: 50%;
        box-shadow: inset 0px 0px 10px #9a151a, 0px 0px 10px #9a151a;
        width: 120px;
        height: 120px;
        position: sticky;
        top: 30%;
        left: calc(100% - 150px);
        margin-top: -150px;

        h2 {
          color: $merlit-purple-color;
          font-size: 40px;
        }
      }
      .music-item-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: auto auto;
        width: 75%;
        flex-basis: 25%;
      }
    }
  }
}
</style>
