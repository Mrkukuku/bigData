<template>
   <div class="tops">
        <div class="table-name">
           <div> 消防安全指数 </div> 
          <dv-decoration-2  dur="5" style="width:100%;height:5px;" />
        </div>
       <div class="firefighting">
           <!-- <dv-border-box-5> -->
               <div class="grade_wrapper" ref="wrapper">
                  <dv-decoration-9 :style="{width:number,height:number}">{{score}}分</dv-decoration-9>
               </div>
           <!-- </dv-border-box-5> -->
       </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            number:"",
            score:84
        }
    },
    methods: {
        getHeigth () {
            this.number = this.$refs.wrapper.offsetHeight + "px"
        },
        resize () {
            var that = this
            window.onresize = function(){
               that.number =that.$refs.wrapper.offsetHeight + "px"
            }
        },
        init () {
            this.score = 84
        },
        init1 () {
            this.score = 86
        },
    },
    mounted() {
        this.getHeigth()
        // this.resize()
    },
}
</script>

<style lang="scss">
    .tops{
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        .firefighting{
            flex: 1;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .grade_wrapper{
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                color: #7ec699;
            }
        }
    }
</style>