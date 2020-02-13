<template>
  <div id="app">
    <NavBar />

    <HelloWorld />

    <MusicItemWrapper>
      <MusicItem
        v-for="item in info_1"
        v-bind:key="item.id"
        v-bind:info_block="item"
      ></MusicItem>

      <MusicItem
        v-for="item in info_2"
        v-bind:key="item.id"
        v-bind:info_block="item"
      ></MusicItem>
    </MusicItemWrapper>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import MusicItem from "./components/MusicItem.vue";
import MusicItemWrapper from "./components/MusicItemWrapper.vue";

export default {
  name: "App",
  data: function() {
    return {
      smth: 0,
      //always a function with a return

      info_1: [
        { id: 0, item: "Bohemian Rhapsody" },
        { id: 1, item: "Queen" },
        { id: 2, item: "October 31, 1975" }
      ],

      info_2: [
        { id: 0, item: "Hotel California, Live on MTV" },
        { id: 1, item: "Eagles" },
        { id: 2, item: "1994" }
      ]
    };
  },
  components: {
    HelloWorld,
    NavBar,
    MusicItem,
    MusicItemWrapper
  },
  created: function() {
    //always a function
    setInterval(() => {
      this.smth = Math.random();
    }, 1000);
  },
  watch: {
    smth: function(theNewValue, theValueItWasBefore) {
      console.log(
        `The old value was: ${theValueItWasBefore}, the new one is ${theNewValue}`
      );
    }
  }
};
</script>

<style lang="scss">
#app {
  text-align: center;
}
body {
  margin: 0px;
}
p {
  font-family: "segoe-ui";
  font-size: 18px;
}
</style>
