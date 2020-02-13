<template>
  <section>
    <h2>Name</h2>
    <div>
      <p>Artists</p>
      <p>Music CD's</p>
      <p>Stories</p>
      <p>Instruments</p>
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
  border-radius: 10px;
  box-shadow: 0 8px 6px -6px $throbbing-dark-color;
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
