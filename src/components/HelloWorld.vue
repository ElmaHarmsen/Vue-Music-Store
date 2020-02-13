<template>
  <section>
    <header>
      <h1>Formidable Music Store</h1>
      <p>This is my first Vue project</p>
    </header>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  h1 {
    font-family: "dancing-script";
    color: $merlit-purple-color;
    font-size: 60px;
    margin: 60px 0px 30px 0px;
  }
  p {
    color: $throbbing-dark-color;
  }
}
</style>
