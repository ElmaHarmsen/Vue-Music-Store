<template>
  <section>
    <NavbarBackground />

    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/spinner.gif')" alt="" class="loader" />
    </div>

    <div v-else>
      <div class="album-info">
        <div class="headers">
          <h1>{{ spAlbumData.name }}</h1>
        </div>
        <div class="info">
          <h1 class="artist">{{ spAlbumData.artists[0].name }}</h1>
          <h2>{{ spAlbumData.label }} | {{ spAlbumData.release_date }}</h2>
        </div>

        <div class="cart">
          <div class="pageTitleBubble">
            <h2 class="toCartContent"></h2>
          </div>
        </div>
      </div>

      <footer>
        <img v-bind:src="spAlbumData.images[0].url" alt="" />
        <img v-bind:src="spAlbumData.images[0].url" alt="" class="blur" />
        <img v-bind:src="spAlbumData.images[0].url" alt="" />
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
  computed: {
    ...mapGetters(["getToken"])
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
            Authorization: `Bearer ${this.getToken}`
          }
        }
      );
      this.spAlbumData = await albumData.json();
    }
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
import { mapGetters } from "vuex"; //read about it!
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;

  .album-info {
    height: 80vh;
    text-align: center;

    .info {
      .artist {
        width: 50%;
        margin: 50px auto;
        color: #fc4b2a;
        text-shadow: #fc4b2a 1px 0 10px;
        animation: bouncey 1s forwards ease-in-out;
        animation-delay: 0.2s;
      }
      .artist:hover {
        animation: hovery 1s 1 ease-in-out;
        animation-delay: 0.2s;
      }
      h2 {
        font-size: 30px;
      }
    }
  }

  footer {
    width: 100%;
    height: 100vh;
    border-top: 5px solid $merlit-purple-color;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    img {
      position: absolute;
      z-index: 1;
      height: 100vh;
      width: auto;
      filter: blur(6px);
      opacity: 0.3;
    }
    .headers {
      position: absolute;
      z-index: 2;
    }
    ul {
      position: absolute;
      z-index: 2;
      margin-top: 250px;
      list-style: none;
      display: flex;
      flex-direction: column;
      height: 600px;
      align-content: center;

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
