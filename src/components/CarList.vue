<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="carsTable"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="carsTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <!-- <b-button variant="primary" v-on:click="goToReservation()">Book a car</b-button> -->
    <!-- <h1>Booked cars</h1>
    <b-table class="table table-hover"
        id="image-table2"
        hover
        fixed
        :items2="bookedCarsTable"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
    >
    </b-table> -->
  </div>
</template>

<script>

import {  mapMutations , mapState } from 'vuex';

export default {
  name: "CarList",

  data() {
    return {
      fields: ['brand', 'model', 'year', 'range', 'price'],
      items: [],
      items2: [],
      currentPage: 1,
      perPage: 5,
      bookedCars: [],
    }
  },

  computed: {
    ...mapState([
      'cars',
      'token',
      'carInformation'
    ]),
    carsTable: function () {
      return this.cars;
    },
    bookedCarsTable: function () {
      return this.bookedCars;
    }
  },

  mounted() {
    this.setCarInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setCarInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setCarInformation(record);
      if (this.token !== "") {
        let carReservation = this.carInformation;
        this.$router.push({ name: 'CarReservation', params: { carReservation } });
      }
      else alert("You cannot make reservations. Log in first!");
    },
    // goToReservation() {
    //   if (this.token !== "") {
    //     let carReservation = this.carInformation
    //     alert("Your reservation is booked");
    //     this.$router.push({ name: 'CarReservation', params: { carReservation } });
    //   }
    //   else alert("You cannot make reservations. Log in first!");
    // }
  }
}
</script>


<style scoped>


</style>