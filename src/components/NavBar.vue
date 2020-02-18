<template>
  <section>
    <div class="consistent-item-wrapper">
      <ConsistentButton
        v-for="btnitem in consistentButton"
        v-bind:key="btnitem.id"
        v-bind:btnContent="btnitem"
      ></ConsistentButton>
    </div>
  </section>
</template>

<script>
import ConsistentButton from "@/components/ConsistentButton.vue";
export default {
  name: "NavBar",
  components: {
    ConsistentButton
  },
  data: function() {
    return {
      consistentButton: [
        {
          id: 0,
          content: "Name"
        },
        {
          id: 1,
          content: "CD's"
        },
        {
          id: 2,
          content: "Artists"
        },
        {
          id: 3,
          content: "LP's"
        },
        {
          id: 4,
          icon: "shopping_cart"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  position: absolute;
  top: 0px;
  z-index: 3;
  // height: 70px;
  width: 75%;
  margin-left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  // border-radius: 10px;
  // box-shadow: 0 8px 6px -6px $throbbing-dark-color;
  // background-image: linear-gradient(
  //   to right,
  //   $throbbing-dark-color,
  //   $merlit-purple-color,
  //   $defenders-red-color,
  //   $flower-lightred-color,
  //   $bicycle-orange-color
  // );

  .consistent-item-wrapper {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: auto auto;
    z-index: 1;
  }

  h2 {
    color: $white-color;
    font-size: 25px;
    margin: 0px;
    padding: 0px 15px;
    align-self: center;
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    align-self: center;

    p {
      color: $white-color;
      font-weight: bold;
      padding: 0px 15px;
    }
  }
}
</style>
