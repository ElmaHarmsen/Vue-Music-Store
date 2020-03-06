<template>
  <section>
    <header>
      <h1>Thank you for</h1>
      <h1>visiting my website!</h1>
    </header>
    <footer>
      <div class="footer-wrapper">
        <div class="footer-wrapper-content">
          <h2>This site is made with</h2>
          <div>
            <img v-bind:src="require('@/assets/vue.png')" alt="" />
            <img v-bind:src="require('@/assets/vuex.png')" alt="" />
            <img v-bind:src="require('@/assets/html.png')" alt="" />
            <img v-bind:src="require('@/assets/css.png')" alt="" />
            <img v-bind:src="require('@/assets/javascript.png')" alt="" />
            <img v-bind:src="require('@/assets/spotify.png')" alt="" />
          </div>
        </div>
        <div class="footer-wrapper-content">
          <h2>This site is made by</h2>
          <p>Elma Harmsen</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>formidablemusicstore.netlify.com | 2020</p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 150px;
  width: 100%;
  height: 100vh;
  border-top: 5px solid $merlit-purple-color;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-self: center;

  background: linear-gradient(#022d36, #000);

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
      animation: thankYouAnimation 5s linear infinite;
    }
  }

  footer {
    height: 50vh;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .footer-wrapper {
    width: 75%;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  h2 {
    color: $white-color;
    font-size: 35px;
  }
  .footer-bottom {
    p {
      font-size: 15px;
      color: $white-color;
    }
  }
  .footer-wrapper-content {
    display: flex;
    flex-flow: column;
    width: 50%;

    img {
      width: 100px;
    }

    p {
      color: $white-color;
      font-size: 25px;
    }
  }
}
section > * {
  padding: 30px 0px;
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
