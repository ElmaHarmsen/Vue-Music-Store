<template>
  <section>
    <h1>An error has occured</h1>
    <div class="bluetooth-animation">
      <span class="bluetooth-dot dot-left"></span>
      <i class="material-icons">
        bluetooth
      </i>
      <span class="bluetooth-dot dot-right"></span>
    </div>
    <div>
      <h2>What you can do:</h2>
      <ul>
        <li>Check in the url bar for a typo</li>
        <li>Check if your wifi is still operational</li>
        <li>Reload the browser</li>
        <li>Have you tried turning it of and on again?</li>
        <li>Or go back to...</li>
      </ul>
      <router-link to="/" class="router-link">
        <div class="consistent-button-border">
          <h2>Home</h2>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style lang="scss" scoped>
section {
  overflow: hidden;
  margin: 0px;
  padding: 0px;
  text-align: center;

  h1 {
    color: $merlit-purple-color !important;
  }

  div {
    h2 {
      font-size: 40px;
    }
    ul {
      list-style: none;

      li {
        font-family: "segoe-ui";
        font-size: 25px;
      }
    }
    .consistent-button-border {
      border-radius: 50%;
      box-shadow: 0 8px 6px -6px #280904;
      width: 120px;
      height: 120px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      animation-name: changeColorButton;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      margin-top: 50px;
      margin-bottom: 25px;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    h2 {
      color: #680e34;
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
  .bluetooth-animation {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    .bluetooth-dot {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: $merlit-purple-color;
      position: relative;
      align-self: center;
    }
    .dot-left {
      animation-name: bluetoothDotLeft;
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    }
    .dot-right {
      animation-name: bluetoothDotRight;
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    }
    .material-icons {
      color: $merlit-purple-color;
      font-size: 200px;
      margin: 10px 0px 0px 0px;
    }

    @keyframes bluetoothDotLeft {
      0% {
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    @keyframes bluetoothDotRight {
      0% {
        opacity: 1;
      }
      40% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
}
</style>
