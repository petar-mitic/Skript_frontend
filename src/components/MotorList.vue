<template>
  <div>
    <b-table class="table table-hover"
        id="image-table"
        hover
        fixed
        :items="motorsTable"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="motorsTable.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
    <!-- <b-button variant="primary" v-on:click="goToReservation()">Book a motor</b-button> -->
    <!-- <h1>Booked motors</h1>
    <b-table class="table table-hover"
        id="image-table2"
        hover
        fixed
        :items2="bookedMotorsTable"
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
  name: "MotorList",

  data() {
    return {
      fields: ['brand', 'model', 'year', 'range', 'price'],
      items: [],
      items2: [],
      currentPage: 1,
      perPage: 5,
      bookedMotors: [],
    }
  },

  computed: {
    ...mapState([
      'motors',
      'token',
      'motorInformation'
    ]),
    motorsTable: function () {
      return this.motors;
    },
    bookedMotorsTable: function () {
      return this.bookedMotors;
    }
  },

  mounted() {
    this.setMotorInformation("");
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

  },

  methods: {
    ...mapMutations([
      'setMotorInformation',
      'setToken'
    ]),

    rowClicked(record) {
      this.setMotorInformation(record);
      if (this.token !== "") {
        let motorReservation = this.motorInformation;
        this.$router.push({ name: 'MotorReservation', params: { motorReservation } });
      }
      else alert("You cannot make reservations. Log in first!");
    },
    // goToReservation() {
    //   if (this.token !== "") {
    //     let motorReservation = this.motorInformation
    //     alert("Your reservation is booked");
    //     this.$router.push({ name: 'MotorReservation', params: { motorReservation } });
    //   }
    //   else alert("You cannot make reservations. Log in first!");
    // }
  }
}
</script>


<style scoped>


</style>