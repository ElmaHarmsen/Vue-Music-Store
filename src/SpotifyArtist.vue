<template>
  <section>
    <NavbarBackground />

    <div v-if="loading" class="loading-wrapper">
      <img v-bind:src="require('@/assets/spinner.gif')" alt="" class="loader" />
    </div>

    <div v-else>
      <div class="artist-info">
        <div class="headers">
          <h1>{{ spArtistData.name }}</h1>
        </div>
        <div class="followers">
          <h1 id="counter">{{ spArtistData.followers.total }}</h1>
          <h1>Spotify Followers</h1>
        </div>
      </div>
      <footer>
        <img v-bind:src="spArtistData.images[0].url" alt="" />
        <img v-bind:src="spArtistData.images[0].url" alt="" />
        <img v-bind:src="spArtistData.images[0].url" alt="" />
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: "SpotifyArtist",
  props: ["spotifytype", "spotifyid"],
  components: {
    NavbarBackground
  },
  data: function() {
    return {
      loading: true,
      spArtistData: {}
    };
  },
  created: async function() {
    await this.fetchData();
    this.loading = false;

    // let start = null;
    // let element = document.getElementById("counter");
    // function count(time) {
    //   if (!start) {
    //     start = time;
    //   }
    //   var progress = time - start;
    //   element.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
    //   if (progress < 2000) {
    //      window.requestAnimationFrame();
    //   }
    // }
    // window.requestAnimationFrame();
    // let result = parseInt(element.textContent, 10);
    // let duration = 5000;
  },
  computed: {
    ...mapGetters(["getToken"]),
    spotifyGenres: function() {
      let genresString = this.spArtistData.genres.join(", ");
      return genresString;
    }
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    async fetchData() {
      const artistData = await fetch(
        "https://api.spotify.com/v1/artists/" + this.spotifyid,
        {
          headers: {
            Authorization: `Bearer ${this.getToken}`
          }
        }
      );
      this.spArtistData = await artistData.json();
    }
  }
};
import NavbarBackground from "./components/NavbarBackground.vue";
import { mapGetters } from "vuex"; //read about it!
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
  div {
    .artist-info {
      height: 80vh;

      .followers {
        text-align: center;

        h1 {
          color: $white-color;
          text-shadow: #9a151a 1px 0 10px;

          &:first-of-type {
            color: #fc4b2a;
            text-shadow: #fc4b2a 1px 0 10px;
          }
        }
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

      &:first-of-type {
        left: 0;
        filter: blur(6px);
        opacity: 0.3;
        position: absolute;
        z-index: 0;
      }
      &:last-of-type {
        right: 0;
        filter: blur(6px);
        opacity: 0.3;
        position: absolute;
        z-index: 0;
      }
    }
  }
}
</style>
