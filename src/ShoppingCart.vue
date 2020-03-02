<template>
  <section>
    <NavbarBackground />

    <div class="headers">
      <h1>Your shoppingcart</h1>
    </div>

    <div class="cart-wrapper">
      <div class="cart-content"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShoppingCart",
  components: {
    NavbarBackground
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  .cart-wrapper {
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
    height: 80vh;
    margin: 50px auto;

    .cart-content {
      background: $white-color;
      width: 100%;
      margin: 5px;
      border-radius: 10px;
    }
  }
}
</style>
