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
      <div class="info-properties">
        <div class="left"></div>
        <div class="right">
          <h2>{{ spAlbumData.name }}</h2>
          <ul>
            <li>By {{ spAlbumData.artists[0].name }}</li>
            <li>{{ spAlbumData.label }}</li>
            <li>Released at {{ spAlbumData.release_date }}</li>
          </ul>
          <h2>€price,-</h2>
        </div>
      </div>

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

  .info-properties {
    background: linear-gradient(
      135deg,
      $merlit-purple-color,
      $merlit-purple-color 60%,
      $bicycle-orange-color
    );
    border-radius: 10px;
    box-shadow: 0 8px 6px -6px $throbbing-dark-color;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 75%;
    margin: auto auto;
    height: 80vh;
    margin-top: 50px;

    .left {
      align-self: center;
    }
    .right {
      align-self: center;
      text-align: right;
      padding-right: 150px;

      ul {
        list-style: none;

        li {
          font-size: 30px;
          color: $white-color;
        }
      }

      h2 {
        font-size: 40px;
        color: $white-color;
      }
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

      &:first-of-type {
        left: 0;
        opacity: 0.3;
      }
      &:last-of-type {
        right: 0;
        filter: blur(7px);
        opacity: 0.3;
      }
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
