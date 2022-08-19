<template>
  <div>
    <CarList/>
  </div>

</template>

<script>

import CarList from '@/components/CarList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Car",

  components: {
    CarList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchCars();
  },

  computed: {
    
  },

  methods: {
    ...mapActions([
      'fetchCars'
    ])
  }


}
</script>


<style scoped>


</style>