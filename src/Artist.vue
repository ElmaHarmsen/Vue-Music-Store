<template>
  <section>
    <NavbarBackground />

    <div class="headers">
      <h1>Here we have...</h1>
    </div>

    <div class="artist-properties">
      <div>
        <h1>Name of Artist</h1>
      </div>
      <div class="artist-images artist-image-1"></div>
      <div class="artist-images artist-image-2"></div>
      <div class="artist-images artist-image-3"></div>
    </div>
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
  padding-top: 100px;

  .artist-properties {
    display: flex;
    flex-flow: column wrap;
    text-align: center;
  }
  .artist-images {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 75%;
    margin: 0px auto;
  }
  .artist-image-1 {
    background-image: url("assets/random.png");
  }
  .artist-image-2 {
    background-image: url("assets/random2.jpg");
  }
  .artist-image-3 {
    background-image: url("assets/random3.jpeg");
  }
}
</style>
