<template>
  <section>
    <h2>Name</h2>
    <div>
      <p>Item One</p>
      <p>Item Two</p>
      <p>Item Three</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
section {
  height: 70px;
  width: 75%;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    $throbbing-dark-color,
    $merlit-purple-color,
    $defenders-red-color,
    $flower-lightred-color,
    $bicycle-orange-color
  );

  h2 {
    font-family: "dancing-script";
    color: $white-color;
    font-size: 25px;
    margin: 0px;
    padding: 0px 15px;
    align-self: center;
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    align-self: center;

    p {
      color: $white-color;
      font-weight: bold;
      padding: 0px 15px;
    }
  }
}
</style>
