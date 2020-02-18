<template>
  <section>
    <span v-on:click="$emit('decreasePage')" v-if="homePageNumbers > 1">
      <ConsistentButton v-bind:btnContent="buttonBack"></ConsistentButton>
    </span>

    <span v-if="homePageNumbers < 3">
      <ConsistentButton
        v-bind:btnContent="buttonFront"
        v-on:click="increasePage"
      ></ConsistentButton>
    </span>
  </section>
</template>

<script>
import ConsistentButton from "@/components/ConsistentButton.vue";
export default {
  name: "PageIndicator",
  props: ["homePageNumbers"],
  components: {
    ConsistentButton
  },
  data: function() {
    return {
      buttonFront: {
        icon: "fast_forward",
        color: "#680e34",
        size: "60px"
      },
      buttonBack: {
        icon: "skip_previous",
        color: "#680e34",
        size: "60px"
      }
    };
  },
  methods: {
    increasePage() {
      this.homePageNumber++;
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 75%;
  margin-left: 50%;
  transform: translateX(-50%);

  div {
    margin: 0 0px 50px 0px !important;
  }
}
</style>
