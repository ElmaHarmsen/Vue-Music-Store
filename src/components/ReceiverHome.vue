<template>
  <section>
    <h1>What we're playing for</h1>
    <div>
      <div class="wrapper">
        <!--row 1-->
        <div class="power-btn-stuff">
          <i class="material-icons power-btn">
            power_settings_new
          </i>
        </div>

        <div class="display">
          <h3>You</h3>
        </div>
        <div class="measurements"></div>

        <!--row 2-->
        <div class="trible-btn">
          <div></div>
          <div></div>
        </div>
        <div class="cd-port-stuff">
          <div class="around-cd-port-btn">
            <i class="material-icons cd-port-btn">pause</i>
            <i class="material-icons cd-port-btn">stop</i>
            <i class="material-icons cd-port-btn">fast_rewind</i>
            <i class="material-icons cd-port-btn">fast_forward</i>
            <i class="material-icons cd-port-btn">keyboard_capslock</i>
          </div>
          <div class="cd-port"></div>
        </div>

        <div class="volume-btn"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  width: 75%;
  margin: 0px auto 100px auto;

  h1 {
    color: $white-color;
    text-shadow: #9a151a 1px 0 10px;
    margin: 0px 0px 50px 0px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 50% 50%;
    align-items: center;
    border: 5px solid $merlit-purple-color;
    height: 60vh;
    border-radius: 10px;
    box-shadow: -3px 15px 10px -6px $throbbing-dark-color;
    padding: 15px 0px;

    .power-btn-stuff {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      background-color: $throbbing-dark-color;
      height: 25vh;
      box-shadow: 0px 5px 25px -2px $throbbing-dark-color;
      padding: 0px 0px 0px 40px;

      .power-btn {
        font-size: 50px;
        color: $bicycle-orange-color;
        text-shadow: #fc4b2a 1px 0 10px;
        border-radius: 50%;
        box-shadow: 0px 2px 25px -2px black;
        padding: 15px;
        width: 50px;
        height: 50px;
      }
    }

    .cd-port-stuff {
      width: 100%;

      .around-cd-port-btn {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        .material-icons {
          color: $white-color;
        }
        .cd-port-btn {
          background-color: $throbbing-dark-color;
          border-radius: 50%;
          padding: 5px;
          box-shadow: 0px 2px 10px -2px $throbbing-dark-color;
        }
      }

      .cd-port {
        border: 3px solid $throbbing-dark-color;
        box-shadow: 0px -4px 6px $throbbing-dark-color;
        border-radius: 0% 0% 10px 10px;
        height: 80px;
        width: 100%;
        margin: 15px 0px 0px 0px;
      }
    }
    .trible-btn {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      padding: 0px 0px 0px 40px;

      div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: $throbbing-dark-color;
        box-shadow: 0px 2px 25px -2px $throbbing-dark-color;
        border: 3px solid #bdbdbd;
        margin: 0px 15px;
      }
    }
    .volume-btn {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: $throbbing-dark-color;
      box-shadow: 0px 2px 25px -2px $throbbing-dark-color;
      border: 3px solid #bdbdbd;
      align-self: center;
      justify-self: center;
    }

    .display {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      background-color: $throbbing-dark-color;
      width: 100%;
      height: 25vh;
      text-align: left;
      box-shadow: 0px 5px 25px -2px $throbbing-dark-color;

      h3 {
        color: #bdbdbd;
        font-size: 45px;
      }
    }

    .measurements {
      background-color: $throbbing-dark-color;
      width: 100%;
      height: 25vh;
      box-shadow: 0px 5px 25px -2px $throbbing-dark-color;

      div {
        background-color: black;
        width: 200px;
        height: 100px;
      }
    }
  }
}
</style>
