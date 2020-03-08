<template>
  <section>
    <NavbarBackground />

    <div class="headers">
      <h1>Discover Artists</h1>
    </div>

    <div class="artists-wrapper">
      <SpotifyArtistItem
        v-for="artistItem in artistJsonData"
        v-bind:key="artistItem.id"
        v-bind:spotifydata="artistItem"
      >
      </SpotifyArtistItem>
    </div>
  </section>
</template>

<script>
export default {
  name: "Artist",
  props: ["artistitem"],
  components: {
    NavbarBackground,
    SpotifyArtistItem
  },
  data: function() {
    return {
      artistJsonData: []
    };
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      const artistData = require("./assets/ArtistData.json");
      artistData.artistJson.forEach(async spArtistcode => {
        const someData = await fetch(
          "https://api.spotify.com/v1/artists/" + spArtistcode,
          {
            headers: {
              Authorization:
                "Bearer BQClnXzh8r4mDJo55xEFcQEuvfcNQssTdT4kGvBzHDD6z_9wRt2dKCMcgVUNQaDkOhp5IJbRLjXwltkEH0M"
            }
          }
        );
        this.artistJsonData.push(await someData.json());
      });
    }
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
import SpotifyArtistItem from "./components/SpotifyArtistItem.vue";
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  .artists-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: auto auto;
    width: 75%;
    flex-basis: 25%;
  }
}
</style>
