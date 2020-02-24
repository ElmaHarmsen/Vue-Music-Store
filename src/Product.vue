<template>
  <section>
    <NavbarBackground />

    <div class="headers">
      <h1>This is...</h1>
    </div>

    <div class="info-properties">
      <div class="left">
        <h1>Title</h1>
      </div>
      <div class="right">
        <h2>Stuff</h2>
      </div>
    </div>

    <div class="headers">
      <h1>These are the tracks</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  props: ["single"],
  components: {
    NavbarBackground
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  .info-properties {
    background: linear-gradient(
      135deg,
      $merlit-purple-color,
      $merlit-purple-color 60%,
      $bicycle-orange-color
    );
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px $throbbing-dark-color;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 75%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 80vh;

    .left {
      align-self: center;
      margin-left: 100px;
    }
    .right {
      align-self: center;
    }
  }
}
</style>
