<template>
  <div id="app"  v-if="this.token">
    <Header subtitle=""/>
    <h1>Your truck reservation</h1>
    <ul class="list-group">
      <li class="list-group-item">Brand: {{ truckReservation.brand }}</li>
      <li class="list-group-item">Model: {{ truckReservation.model }}</li>
      <li class="list-group-item">Year: {{ truckReservation.year }}</li>
      <li class="list-group-item">Range: {{ truckReservation.range }}</li>
      <li class="list-group-item">Price: {{ truckReservation.price }}</li>
    </ul>
    <br>
    <b-button variant="primary" v-on:click="bookTruck()">Book reservation</b-button>
    <br>
    <br>
    <b-button variant="primary" v-on:click="goToTruck()">Go back</b-button>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import {mapState, mapMutations } from 'vuex';

export default {
  name: 'Reservations',

  components: {
    Header
  },

  props: {
    truckReservation: Object
  },

  computed: {
    ...mapState([
      'token',
      'truckInformation'
    ])
  },

  mounted() {
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {
    ...mapMutations([
      'removeToken',
      'setToken',
      'setTruckInformation'
    ]),

    bookTruck() {
      alert("Your reservation is booked")
      this.$router.push({ name: 'Truck' });
    },

    goToTruck() {
      this.$router.push({ name: 'Truck' });
    },

    logout() {
      this.removeToken();
    }
  },

  sockets: {
    error(err) {
      alert(err);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>