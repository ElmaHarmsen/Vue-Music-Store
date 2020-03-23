<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created: function() {
    //By providing a store option in the root instance, the store will be injected into all child components
    //These will be available with this(refers to the intstance).$store.smth
    this.$store.dispatch("generateToken");
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
}
</style>
