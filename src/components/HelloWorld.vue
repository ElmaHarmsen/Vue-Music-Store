<template>
  <section>
    <header>
      <h1>Formidable Music Store</h1>
      <!-- <img v-bind:src="require('@/assets/CD.jpg')" alt=""> -->
    </header>
    <span
      class="starry"
      v-for="star in stars"
      v-bind:key="star.id"
      v-bind:style="{
        backgroundColor: star.color,
        left: star.positionX + 'px',
        top: star.positionY + 'px'
      }"
    ></span>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: Number
  },
  data: function() {
    return {
      stars: []
    };
  },
  created: function() {
    for (let starId = 0; starId < 1001; starId++) {
      this.stars.push({
        id: starId,
        positionX: Math.random() * window.innerWidth - 20,
        positionY: Math.random() * window.innerHeight - 3,
        color: (() => {
          if (starId % 5 === 0) return "#680e34";
          if (starId % 4 === 0) return "#c21b12";
          if (starId % 3 === 0) return "#fc4b2a";
          return "#680e34";
        })() //an IIFE (immediadetly invoked function expression) = js function which runs as soon as its defined
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  background: radial-gradient(closest-side, #756c1b, #0e99b5, #022d36);
  border-bottom: 5px solid $merlit-purple-color;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  header {
    p {
      color: $throbbing-dark-color;
    }
  }
  .starry {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 100px;
  }
}
</style>
