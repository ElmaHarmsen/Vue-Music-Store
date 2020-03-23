import Vue from "vue";
import Vuex from "vuex";
//Imports Vuex

Vue.use(Vuex);
//Enables the injection of the store

// const cart = {
//   state: {
//     products: []
//   },
//   actions: {
//     fetchProducts() {}
//   },
//   mutations: {
//     setProducts(state, products) {
//       state.products = products;
//     }
//   },
//   getters: {
//     getProducts: state => {
//       return state.products;
//     }
//   }
// };

const spotify = {
  state: {
    //Data
    token: ""
  },
  actions: {
    //Make a call, for async operations,
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
    //Updating stuff, single state change for sync operations
    changeToken(state, token) {
      state.token = token;
    }
  },
  getters: {
    //A computed property
    getToken: state => {
      //getToken is getters' name, state is a getters' first argument
      return state.token;
    }
  }
};

export default new Vuex.Store({
  modules: {
    //For multiple stores
    // cart,
    spotify
  }
});
