<template>
  <router-link
    v-bind:to="`/spotifyartist/${spotifydata.type}/${spotifydata.name}`"
    class="router-link"
  >
    <section>
      <img v-bind:src="spotifydata.images[0].url" alt="" />

      <div class="content">
        <p>{{ spotifydata.name }}</p>
        <ul>
          <li>Genres: {{ spotifyGenreLimit }}</li>
          <li>Spotify Followers:</li>
        </ul>
        <p>{{ spotifydata.followers.total }}</p>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  name: "SpotifyArtistItem",
  props: ["spotifydata"],
  data: function() {
    return {};
  },
  computed: {
    spotifyGenreLimit: function() {
      let genresString = this.spotifydata.genres.join(", ");
      let length = 17;
      let limitedTitle = genresString.substring(0, length);
      if (genresString.length > 17) {
        limitedTitle += "...";
      }
      return limitedTitle;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
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
  min-height: 450px;
  justify-content: space-between;
  margin-bottom: 100px;

  img {
    width: 250px;
    height: auto;
  }

  .content {
    width: 250px;

    ul {
      list-style: none;
      text-align: left;
      padding: 10px;
      margin: 0px;

      li {
        font-family: "segoe-ui";
        color: $white-color;
        font-size: 18px;
      }
    }
  }
  p {
    color: $white-color;
    font-family: "dancing-script";
    font-size: 30px;
    margin: 0px;
    padding: 10px 0px;
    text-align: center;
  }
}
</style>
