<template>
  <div class="consistent-button-border">
    <p>{{ btnContent.content }}</p>
    <i
      v-bind:style="{ color: btnContent.color, fontSize: btnContent.size }"
      class="material-icons"
      v-if="btnContent.icon"
    >
      {{ btnContent.icon }}
    </i>
  </div>
</template>

<script>
export default {
  name: "ConsistentButton",
  props: ["btnContent"]
};
</script>

<style lang="scss" scoped>
.consistent-button-border {
  border-radius: 50%;
  box-shadow: 0 8px 6px -6px $throbbing-dark-color;
  width: 120px;
  height: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  animation-name: changeColorButton;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  margin: 25px 25px 0px 25px;
  color: $white-color;

  .material-icons {
    color: $white-color;
    font-size: 40px;
  }

  p {
    margin: 0;
    font-family: "dancing-script";
    font-size: 30px;
    font-weight: bold;
  }

  @keyframes changeColorButton {
    0% {
      border: 5px solid $defenders-red-color;
    }
    50% {
      border: 5px solid $bicycle-orange-color;
    }
    100% {
      border: 5px solid $defenders-red-color;
    }
  }
}
</style>
