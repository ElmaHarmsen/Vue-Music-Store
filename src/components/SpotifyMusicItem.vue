<template>
  <router-link
    v-bind:to="`/spotifyproduct/${spotifydata.album_type}/${spotifydata.name}`"
    class="router-link"
  >
    <section>
      <img v-bind:src="spotifydata.images[0].url" alt="" />

      <div class="content">
        <p>{{ spotifyTitleLimit }}</p>
        <ul>
          <li>{{ spotifydata.artists[0].name }}</li>
          <li>
            {{ spotifydata.release_date }} | Tracks:
            {{ spotifydata.total_tracks }}
          </li>
        </ul>
      </div>

      <div class="cart">
        <button>in<br />cart</button>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  name: "SpotifyMusicItem",
  props: ["spotifydata"],
  data: function() {
    return {};
  },
  computed: {
    spotifyTitleLimit: function() {
      let name = this.spotifydata.name;
      let length = 17;
      let limitedTitle = name.substring(0, length);
      if (name.length > 17) {
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
  .cart {
    margin: 15px auto;

    button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 3px solid $white-color;
      background: transparent;
      color: $white-color;
      font-family: "dancing-script";
      font-size: 30px;
      line-height: 0.9;
    }
    button:hover {
      background: $white-color;
      color: $throbbing-dark-color;
      transition: 0.2s;
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
