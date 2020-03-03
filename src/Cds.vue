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
              Authorization:
                "Bearer BQA_Ao71SunZ7KNo4yk3QcEAnXazdL1H6ExQfBIyFU9fOwAeN7d3M_jiscrzOyMKqL3p4ASqOIAHOSb-Glo"
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

    .cd-item {
      background: linear-gradient(
        135deg,
        $merlit-purple-color,
        $merlit-purple-color 60%,
        $bicycle-orange-color
      );
      padding: 20px;
      display: flex;
      flex-flow: column;
      border-radius: 10px;
      box-shadow: 0 8px 6px -6px $throbbing-dark-color;
      margin: 50px 0px 50px 0px;
      height: 450px;
      justify-content: space-between;
    }
  }
}
</style>
