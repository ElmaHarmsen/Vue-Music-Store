<template>
  <section>
    <NavbarBackground />

    <div class="headers">
      <h1>Discover cd's</h1>
    </div>

    <div class="cds-wrapper">
      <SpotifyMusicItem
        v-for="cdItem in cdJsonData"
        v-bind:key="cdItem.id"
        v-bind:spotifydata="cdItem"
      >
      </SpotifyMusicItem>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cd",
  props: ["cditem"],
  components: {
    NavbarBackground,
    SpotifyMusicItem
  },
  data: function() {
    return {
      cdJsonData: []
    };
  },
  created: function() {
    this.fetchData();
  },
  computed: {
    ...mapGetters(["getToken"])
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      const cdData = require("./assets/CdData.json");
      cdData.cdJson.forEach(async spAlbumcode => {
        const someData = await fetch(
          "https://api.spotify.com/v1/albums/" + spAlbumcode,
          {
            headers: {
              Authorization: `Bearer ${this.getToken}`
            }
          }
        );
        this.cdJsonData.push(await someData.json());
      });
    }
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
import SpotifyMusicItem from "./components/SpotifyMusicItem.vue";
import { mapGetters } from "vuex"; //read about it!
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  .cds-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: auto auto;
    width: 75%;
    flex-basis: 25%;
  }
}
</style>
