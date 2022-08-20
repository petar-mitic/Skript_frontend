<template>
  <div id="app"  v-if="this.token">
    <Header subtitle=""/>
    <h1>Your motor reservation</h1>
    <ul class="list-group">
      <li class="list-group-item">Brand: {{ motorReservation.brand }}</li>
      <li class="list-group-item">Model: {{ motorReservation.model }}</li>
      <li class="list-group-item">Year: {{ motorReservation.year }}</li>
      <li class="list-group-item">Range: {{ motorReservation.range }}</li>
      <li class="list-group-item">Price: {{ motorReservation.price }}</li>
    </ul>
    <br>
    <b-button variant="primary" v-on:click="bookMotor()">Book reservation</b-button>
    <br>
    <br>
    <b-button variant="primary" v-on:click="goToMotor()">Go back</b-button>
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
    motorReservation: Object
  },

  computed: {
    ...mapState([
      'token',
      'motorInformation'
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
      'setMotorInformation'
    ]),

    bookMotor() {
      alert("Your reservation is booked")
      this.$router.push({ name: 'Motor' });
    },

    goToMotor() {
      this.$router.push({ name: 'Motor' });
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