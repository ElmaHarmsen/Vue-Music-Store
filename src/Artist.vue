<template>
  <section>
    <NavbarBackground />
  </section>
</template>

<script>
export default {
  name: "artist",
  components: {
    NavbarBackground
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
</script>

<style lang="scss" scoped>
section {
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
