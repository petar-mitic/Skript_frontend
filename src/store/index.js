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
    },
    motors: [],
    motor: null,
    motorInformation: {
      brand: '', model: '', year: '', range: '', price: ''
    },
    trucks: [],
    truck: null,
    truckInformation: {
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

    setMotorInformation(state, motor) {
      state.motorInformation.brand = motor.brand;
      state.motorInformation.model = motor.model;
      state.motorInformation.year = motor.year;
      state.motorInformation.range = motor.range;
      state.motorInformation.price = motor.price;
    },

    setMotors(state, motors) {
      state.motors = motors;
    },

    setTruckInformation(state, truck) {
      state.truckInformation.brand = truck.brand;
      state.truckInformation.model = truck.model;
      state.truckInformation.year = truck.year;
      state.truckInformation.range = truck.range;
      state.truckInformation.price = truck.price;
    },

    setTrucks(state, trucks) {
      state.trucks = trucks;
    }
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

    fetchMotors({ commit }){
      fetch('http://localhost:3000/motors/get',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setMotors', res));
    },

    fetchTrucks({ commit }){
      fetch('http://localhost:3000/trucks/get',{
        headers: {
          'authorization': `Bearer ${localStorage.token}`
        },
        method: 'GET'
      })
          .then( obj => obj.json() )
          .then( res => commit('setTrucks', res));
    },
  },
  modules: {
  }
})
