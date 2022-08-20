<template>
  <div>
    <MotorList/>
  </div>

</template>

<script>

import MotorList from '@/components/MotorList.vue';
import {mapActions} from 'vuex';

export default {
  name: "Motor",

  components: {
    MotorList
  },

  data() {
    return {
    }
  },

  mounted() {
    this.fetchMotors();
  },

  computed: {
    
  },

  methods: {
    ...mapActions([
      'fetchMotors'
    ])
  }


}
</script>


<style scoped>


</style>