<template>
  <section>
    <div class="navbar-wrapper">
      <NavBar />
    </div>
  </section>
</template>

<script>
export default {
  name: "Product",
  components: {
    NavBar
  }
};
import NavBar from "./components/NavBar.vue";
</script>

<style lang="scss" scoped></style>
