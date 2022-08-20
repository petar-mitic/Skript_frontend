<template>
  <div>
    <TruckList/>
  </div>

</template>

<script>

import TruckList from '@/components/TruckList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Truck",

  components: {
    TruckList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchTrucks();
  },

  computed: {
    
  },

  methods: {
    ...mapActions([
      'fetchTrucks'
    ])
  }


}
</script>


<style scoped>


</style>