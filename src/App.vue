<template>
  <div id="app">
    
    <!-- <HelloWorld/> -->
    <!-- <div class="circle animated wobble" @click="stop" ref="circle" :class="{infinite:flag}"></div> -->
    <!-- <vido></vido> -->
    <!-- <Map></Map> -->
    <!-- <hotmap></hotmap> -->
    <!-- <players></players> -->
    <!-- <move></move> -->
    <!-- <echar></echar> -->
    <!-- <cascader/> -->
    <!-- <dataV></dataV> -->
    <!-- <Charts></Charts> -->
     <!-- <MapData></MapData> -->
     <!-- <transition name="fade-transform" mode="out-in"> -->
        <router-view/>
     <!-- </transition> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import vido from './components/vido'
// import hotmap from './components/hotmap'
// import players from './components/player'
// import move from './components/move'
// import cascader from './components/cascader'
// import echar from './components/echar'
// import dataV from './components/dataV'
// import datacharts from './components/datacharts'

export default {
  name: 'App',
  // components: {
  //   HelloWorld,vido,hotmap,players,move,cascader,echar,dataV,datacharts
  // },
  data() {
    return {
      flag:true,
      transitionName:"slide-right"
    }
  },
  methods: {
    stop () {
      this.flag = false
    } 
  },
  //  watch: {  
  //   '$route' (to, from) {  
  //     if(to.path == '/'){  
  //       this.transitionName = 'slide-right';  
  //     }else{  
  //       this.transitionName = 'slide-left';  
  //     }  
  //   } 
  //  }
}
</script>

<style>
    #app{
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
    .fade-transform-leave-active,
    .fade-transform-enter-active {
      transition: all .5s;
    }

    .fade-transform-enter {
      opacity: 0;
      transform: translateX(-30px);
    }

    .fade-transform-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }

</style>
