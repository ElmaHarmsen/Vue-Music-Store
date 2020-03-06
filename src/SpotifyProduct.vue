<template>
  <section>
    <NavbarBackground />

    <div class="headers">
      <h1>{{ spAlbumData.name }}</h1>
    </div>
    <div class="product-info"></div>
    <footer>
      <img v-bind:src="spAlbumData.images[0].url" alt="" />
      <img v-bind:src="spAlbumData.images[0].url" alt="" class="mirror" />
      <!-- <ul>
        <li>{{ spAlbumData.tracks.items[0].name }}</li>
        <li>{{ spAlbumData.tracks.items[1].name }}</li>    
      </ul> -->
    </footer>
  </section>
</template>

<script>
export default {
  name: "SpotifyProduct",
  props: ["spotifytype", "spotifyid"],
  components: {
    NavbarBackground
  },
  data: function() {
    return {
      spAlbumData: []
    };
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    async fetchData() {
      const albumData = await fetch(
        "https://api.spotify.com/v1/albums/" + this.spotifyid,
        {
          headers: {
            Authorization:
              "Bearer BQA3sRm96vek8py04Ap8SxX4ggbCWjVJIKkbZTtdabTAocR7BGp-yE3WzUHdRBq-enSYEyYBncyZhVaMuy8"
          }
        }
      );
      this.spAlbumData = await albumData.json();
    }
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  footer {
    margin-top: 150px;
    width: 100%;
    height: 100vh;
    border-top: 5px solid $merlit-purple-color;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    img {
      position: relative;
      height: 100vh;
      width: 49.3vw;
      opacity: 0.1;
    }
    .mirror {
      transform: scaleX(-1);
    }
  }
}
</style>
