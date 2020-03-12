<template>
  <section>
    <header>
      <h1>
        Formidable <br />
        Music Store
      </h1>
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
    <i class="material-icons">
      keyboard_arrow_down
    </i>
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
  background: linear-gradient(#0e99b5, #022d36);
  border-bottom: 5px solid $merlit-purple-color;
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  header {
    h1 {
      font-size: 60px;
      margin: 0;
      color: $bicycle-orange-color;
      text-shadow: #fff 1px 0 10px;
      position: relative;
      z-index: 2;
    }
  }
  .material-icons {
    color: $bicycle-orange-color;
    text-shadow: #fff 1px 0 10px;
    font-size: 60px;
    position: absolute;
    z-index: 2;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    animation-name: arrowAnimation;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
}

@media screen and(min-width: 700px) {
  section {
    header {
      h1 {
        font-size: 200px;
      }
    }
    .material-icons {
      font-size: 100px;
    }
  }
}
@keyframes arrowAnimation {
  0% {
    bottom: 10vh;
  }
  50% {
    bottom: 5vh;
  }
  100% {
    bottom: 10vh;
  }
}
</style>
