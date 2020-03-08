<template>
  <section>
    <NavbarBackground />

    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/spinner.gif')" alt="" class="loader" />
    </div>

    <div v-else>
      <div class="headers">
        <h1>{{ spAlbumData.name }}</h1>
      </div>
      <div class="product-info"></div>

      <footer>
        <img v-bind:src="spAlbumData.images[0].url" alt="" />
        <img v-bind:src="spAlbumData.images[0].url" alt="" class="mirror" />
        <div class="headers">
          <h1>These are the tracks</h1>
        </div>
        <ul
          v-bind:style="{
            flexWrap: spAlbumData.tracks.total > 12 ? 'wrap' : 'no-wrap'
          }"
        >
          <li v-for="track in spAlbumData.tracks.items" v-bind:key="track.id">
            {{ track.track_number }}. {{ track.name }}
          </li>
        </ul>
      </footer>
    </div>
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
      loading: true,
      spAlbumData: {}
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;
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
              "Bearer BQClnXzh8r4mDJo55xEFcQEuvfcNQssTdT4kGvBzHDD6z_9wRt2dKCMcgVUNQaDkOhp5IJbRLjXwltkEH0M"
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

  .loading-wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
      width: 50px;
      margin-top: 50px;
    }
  }

  footer {
    margin-top: 150px;
    width: 100%;
    height: 100vh;
    border-top: 5px solid $merlit-purple-color;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    img {
      position: absolute;
      z-index: -1;
      height: 100vh;
      width: 50%;
      opacity: 0.1;

      &:first-of-type {
        left: 0;
      }
      &:last-of-type {
        right: 0;
      }
    }
    .mirror {
      transform: scaleX(-1);
    }
    .headers {
      position: absolute;
    }
    ul {
      margin-top: 250px;
      list-style: none;
      display: flex;
      flex-direction: column;
      height: 600px;

      li {
        color: $throbbing-dark-color;
        font-size: 20px;
        height: 50px;
        padding: 0px 50px;
        font-weight: bold;
      }
    }
  }
}
</style>
