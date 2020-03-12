<template>
  <section>
    <header>
      <NavBar />
    </header>
    <span
      class="starry"
      v-for="navstar in navstars"
      v-bind:key="navstar.id"
      v-bind:style="{
        backgroundColor: navstar.color,
        left: navstar.positionX + 'px',
        top: navstar.positionY + 'px'
      }"
    ></span>
  </section>
</template>

<script>
export default {
  name: "NavbarBackground",
  components: {
    NavBar
  },
  data: function() {
    return {
      navstars: []
    };
  },
  created: function() {
    for (let navstarId = 0; navstarId < 251; navstarId++) {
      this.navstars.push({
        id: navstarId,
        positionX: Math.random() * window.innerWidth - 20,
        positionY: Math.random() * 188.4 - 3, //max 20vh
        color: (() => {
          if (navstarId % 5 === 0) return "#680e34";
          if (navstarId % 4 === 0) return "#c21b12";
          if (navstarId % 3 === 0) return "#fc4b2a";
          return "#680e34";
        })() //an IIFE (immediadetly invoked function expression) = js function which runs as soon as its defined
      });
    }
  }
};
import NavBar from "@/components/NavBar.vue";
</script>

<style lang="scss" scoped>
@media screen and(min-width: 700px) {
  header {
    background: linear-gradient(#0e99b5, #022d36);
    border-bottom: 5px solid $merlit-purple-color;
    height: 20vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
