import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cars: [],
    car: null,
    carInformation: {
      brand: '', model: '', year: '', range: '', price: ''
    }
  },
  getters: {
  },
  mutations: {
    setToken(state, token) {
      console.log(token);
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    // setLoggedUserId(state, userId) {
    //   state.loggedUserId = userId;
    // },

    setCarInformation(state, car) {
      state.carInformation.brand = car.brand;
      state.carInformation.model = car.model;
      state.carInformation.year = car.year;
      state.carInformation.range = car.range;
      state.carInformation.price = car.price;
    },

    setCars(state, cars) {
      state.cars = cars;
    },
  },
  actions: {
    login({ commit }, obj) {
      console.log("ulazi front");
      fetch('http://localhost:2000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
          .then( tkn => {
            if (tkn.msg) {
              alert(tkn.msg);
            } else {
              console.log(tkn.token)
              // console.log(tkn.userId)
              commit('setToken', tkn.split(" ")[1]);
              // commit('setLoggedUserId', tkn.userId);
            }
          });
    },

    fetchCars({ commit }){
      fetch('http://localhost:3000/cars/get',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setCars', res));
    },
  },
  modules: {
  }
})
