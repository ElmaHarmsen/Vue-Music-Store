<template>
  <section>
    <span
      class="back"
      v-on:click="$emit('decreasePage', 1)"
      v-if="homePageNumbers > 1"
    >
      <ConsistentButton v-bind:btnContent="buttonBack"></ConsistentButton>
    </span>

    <span
      class="forward"
      v-on:click="$emit('increasePage', 1)"
      v-if="homePageNumbers < totalPages"
    >
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
  props: ["homePageNumbers", "totalPages"],
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
    increasePage() {},
    decreasePage() {}
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

  span {
    flex-basis: 100%;
    display: flex;
  }
  span.back {
    justify-content: flex-start;
  }
  span.forward {
    justify-content: flex-end;
  }

  div {
    margin: 0 0px 50px 0px !important;
  }
}
</style>
