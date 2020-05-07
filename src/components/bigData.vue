<template>
    <div class="big_data_wrapper">
        <hotmap></hotmap>
    </div>
</template>

<script>
import hotmap from './regionalAnalysis/hotmap'

export default {
  components:{
    hotmap
  },
  data() {
    return {
    }
  },
  methods: {
   
  },
}
</script>



<style lang="scss">
  .big_data_wrapper{
      height: 100%;
      width: 100%;
  }
</style>