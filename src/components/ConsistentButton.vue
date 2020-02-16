<template>
  <section>
    <div class="consistent-button-border">
      <p>{{ btnContent.content }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConsistentButton",
  props: ["btnContent"]
};
</script>

<style lang="scss" scoped>
section {
  .consistent-button-border {
    border-radius: 50%;
    box-shadow: 0 8px 6px -6px $throbbing-dark-color;
    height: 100px;
    width: 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    animation-name: changeColorButton;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    margin: -200px 25px 0px 25px;
    color: $white-color;

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
        border: 5px solid $defenders-red-color;
      }
      100% {
        border: 5px solid $bicycle-orange-color;
      }
    }
  }
}
</style>
