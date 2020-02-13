<template>
  <section>
    <ul>
      <li>{{ info_block.item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "MusicItem",
  props: ["info_block"]
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  text-align: left;

  li {
    font-family: "segoe-ui";
    color: $defenders-red-color;
    font-size: 18px;
  }
}
</style>
