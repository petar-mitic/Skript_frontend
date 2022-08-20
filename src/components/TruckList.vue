<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="trucksTable"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="trucksTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <!-- <b-button variant="primary" v-on:click="goToReservation()">Book a truck</b-button> -->
    <!-- <h1>Booked trucks</h1>
    <b-table class="table table-hover"
        id="image-table2"
        hover
        fixed
        :items2="bookedTrucksTable"
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
  name: "TruckList",

  data() {
    return {
      fields: ['brand', 'model', 'year', 'range', 'price'],
      items: [],
      items2: [],
      currentPage: 1,
      perPage: 5,
      bookedTrucks: [],
    }
  },

  computed: {
    ...mapState([
      'trucks',
      'token',
      'truckInformation'
    ]),
    trucksTable: function () {
      return this.trucks;
    },
    bookedTrucksTable: function () {
      return this.bookedTrucks;
    }
  },

  mounted() {
    this.setTruckInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setTruckInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setTruckInformation(record);
      if (this.token !== "") {
        let truckReservation = this.truckInformation;
        this.$router.push({ name: 'TruckReservation', params: { truckReservation } });
      }
      else alert("You cannot make reservations. Log in first!");
    },
    // goToReservation() {
    //   if (this.token !== "") {
    //     let truckReservation = this.truckInformation
    //     alert("Your reservation is booked");
    //     this.$router.push({ name: 'TruckReservation', params: { truckReservation } });
    //   }
    //   else alert("You cannot make reservations. Log in first!");
    // }
  }
}
</script>


<style scoped>


</style>