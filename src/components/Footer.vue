<template>
  <section>
    <header>
      <h1>Thank you for visiting</h1>
      <h1>my website!</h1>
    </header>
    <div class="footer-wrapper">
      <h2>Which is made with</h2>
      <div>
        <img v-bind:src="require('@/assets/vue.png')" alt="" />
        <img v-bind:src="require('@/assets/vuex.png')" alt="" />
        <img v-bind:src="require('@/assets/html.png')" alt="" />
        <img v-bind:src="require('@/assets/css.png')" alt="" />
        <img v-bind:src="require('@/assets/javascript.png')" alt="" />
        <img v-bind:src="require('@/assets/spotify.png')" alt="" />
      </div>
      <div>
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
section {
  background: #022d36;
  width: 100%;
  height: 100vh;
  border-top: 5px solid $merlit-purple-color;
  display: flex;
  flex-flow: column nowrap;

  header {
    width: 75%;
    text-align: center;
    margin: 50px auto;

    h1 {
      font-size: 100px;
      margin: 0;
      text-shadow: #fff 1px 0 10px;
      position: relative;
      z-index: 2;
      animation: thankYouAnimation 0.3s linear infinite;
    }
  }

  .footer-wrapper {
    width: 75%;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: column;
  }

  div {
    text-align: left;
    display: flex;
    flex-flow: row nowrap;

    img {
      width: 120px;
    }
  }
}

@keyframes thankYouAnimation {
  0% {
    color: $defenders-red-color;
  }
  50% {
    color: $bicycle-orange-color;
  }
  100% {
    color: $defenders-red-color;
  }
}
</style>
