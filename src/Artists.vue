<template>
  <section>
    <NavbarBackground />

    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/spinner.gif')" alt="" class="loader" />
    </div>

    <div v-else>
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
      loading: true,
      artistJsonData: []
    };
  },
  computed: {
    ...mapGetters(["getToken"])
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
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
              Authorization: `Bearer ${this.getToken}`
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
import { mapGetters } from "vuex"; //read about it!
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  div {
    .artists-wrapper {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      margin: auto auto;
      width: 75%;
      flex-basis: 25%;
    }
  }
}
</style>
