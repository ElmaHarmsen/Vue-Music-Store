<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  created: function() {
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
