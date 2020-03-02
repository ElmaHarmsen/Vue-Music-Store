<template>
  <section>
    <p>{{ spotifydata.name }}</p>
    <p>data from spotify</p>
  </section>
</template>

<script>
export default {
  name: "SpotifyMusicItem",
  props: ["spotifydata"]
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
  margin: 50px 0px 50px 0px;
  height: 450px;
  justify-content: space-between;
}
</style>
