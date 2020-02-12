<template>
  <section>
    <h3>
      {{ msg }}
    </h3>
    <article>
      <h3>Formidable Music Store</h3>
      <p>This is my first Vue project</p>
    </article>
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
article {
  h3 {
    font-family: "dancing-script";
    color: $merlit-purple-color;
  }
  p {
    font-family: "segou-ui";
    color: $throbbing-dark-color;
  }
}
</style>
