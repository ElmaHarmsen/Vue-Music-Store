<template>
  <div id="app">
    <HelloWorld v-bind:msg="smth" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data: function() {
    return {
      //always a function with a return
      smth: 0
    };
  },
  components: {
    HelloWorld
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
