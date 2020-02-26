<template>
  <section>
    <NavbarBackground />

    <!-- <div class="headers">
      <h1>Here we have...</h1>
    </div> -->

    <div class="artist-properties">
      <div class="artist-images artist-image-1">
        <h1>Name of the Artist</h1>
      </div>
      <div class="artist-images artist-image-2">
        <h1>Popular Song One</h1>
      </div>
      <div class="artist-images artist-image-3">
        <h1>Popular Song Two</h1>
      </div>
      <div class="artist-images artist-image-4">
        <h1>Popular Song Three</h1>
      </div>
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
  padding-top: 90px;

  .artist-properties {
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    width: 75%;
    margin: 0px auto;
  }
  .artist-images {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
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
  .artist-image-4 {
    background-image: url("assets/random4.jpeg");
  }
}
</style>
