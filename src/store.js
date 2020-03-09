import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: ""
  },
  actions: {
    async generateToken(context) {
      let base64 = require("base-64");
      const spotifyData = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${base64.encode(
              `${process.env.VUE_APP_SPOTIFYUSER}:${process.env.VUE_APP_SPOTIFYPASSWORD}`
            )}`
          },
          body: "grant_type=client_credentials"
        }
      );
      let tokenObject = await spotifyData.json();
      if (tokenObject.access_token) {
        context.commit("changeToken", tokenObject.access_token);
      }
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token;
    }
  },
  getters: {
    getToken: state => {
      return state.token;
    }
  }
});
