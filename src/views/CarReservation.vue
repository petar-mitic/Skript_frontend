<template>
  <div id="app"  v-if="this.token">
    <Header subtitle=""/>
    <h1>Your car reservation</h1>
    <ul class="list-group">
      <li class="list-group-item">Brand: {{ carReservation.brand }}</li>
      <li class="list-group-item">Model: {{ carReservation.model }}</li>
      <li class="list-group-item">Year: {{ carReservation.year }}</li>
      <li class="list-group-item">Range: {{ carReservation.range }}</li>
      <li class="list-group-item">Price: {{ carReservation.price }}</li>
    </ul>
    <br>
    <b-button variant="primary" v-on:click="bookCar()">Book reservation</b-button>
    <br>
    <br>
    <b-button variant="primary" v-on:click="goToCar()">Go back</b-button>
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
    carReservation: Object
  },

  computed: {
    ...mapState([
      'token',
      'carInformation'
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
      'setCarInformation'
    ]),

    bookCar() {
      alert("Your reservation is booked")
      this.$router.push({ name: 'Car' });
    },

    goToCar() {
      this.$router.push({ name: 'Car' });
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