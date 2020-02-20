<template>
  <section>
    <div class="navbar-wrapper">
      <NavBar />
    </div>
    <div class="info-properties">
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hi</h2>
      </div>
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

<style lang="scss" scoped>
section {
  .info-properties {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 75%;
    margin-top: 250px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
