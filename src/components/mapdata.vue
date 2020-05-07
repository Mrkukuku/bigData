<template>
        <!-- <div class="screen_wrapper"> -->

         <dv-full-screen-container>
                <maps :module="0"></maps>
                <div class="headers"> 
                    <dv-decoration-8 style="width: 25%;height: 60px;" />
                    <dv-decoration-5 style="width: 40%;height: 60px;margin-top: 30px;" />    
                    <dv-decoration-8 :reverse="true" style="width: 25%;height: 60px;" />
                    <div class="title" @click="flag=!flag">绍兴市应急信息化数据平台</div>
                </div>
                <div class="btn" @click="change(1)">
                    <dv-border-box-6 >
                        行业数据统计
                    </dv-border-box-6>
                </div>
                <div class="btn area" @click="change(2)">
                    <dv-border-box-6>
                        区域安全统计
                    </dv-border-box-6>
                </div>
                <div class="btn alarm_area" @click="exit(2)">
                    <dv-border-box-6>
                        作战平台
                    </dv-border-box-6>
                </div>
                <div class="chart_left"> 
                    <dv-border-box-1>
                        <div class="left_tops">
                            <transition enter-active-class="animated slideInLeft" mode="out-in">
                                <LeftTopCmp v-if="flag && changeFlag" ref="LeftTopCmp"></LeftTopCmp>
                            </transition>
                        </div>
                        <div class="left_middle">
                            <transition enter-active-class="animated slideInLeft" mode="out-in">
                                <LeftMiddleCmp v-if="flag && changeFlag" ref="LeftMiddleCmp"></LeftMiddleCmp>
                            </transition>
                        </div>
                        <div class="left_bottom">
                            <transition enter-active-class="animated slideInLeft" mode="out-in">
                                <LeftBottomCmp v-if="flag"></LeftBottomCmp>
                            </transition>  
                        </div>
                    </dv-border-box-1> 
                </div>
                <div class="chart_right"> 
                    <dv-border-box-1>
                        <div class="right_top">
                            <transition enter-active-class="animated slideInRight" mode="out-in">
                                <RightTopCmp v-if="flag && changeFlag" ref="RightTopCmp"></RightTopCmp>
                            </transition>
                        </div>
                        <div class="right_middle">
                                <transition enter-active-class="animated slideInRight" mode="out-in">
                                <RightMiddleCmp v-if="flag && changeFlag" ref="RightMiddleCmps"></RightMiddleCmp>
                                </transition>
                        </div>
                        <div class="right_bottom">
                                <transition enter-active-class="animated slideInRight" mode="out-in">
                                <RightBottomCmp v-if="flag"></RightBottomCmp>
                                </transition>
                        </div>
                    </dv-border-box-1> 
                </div>

                <div class="bottom">
                    <div class="bottom_left">
                            <div class="bottom_content">
                                <img src="../../static/img/icon1 (2).png" alt="" @click="exit(1)">
                                <img src="../../static/img/icon1 (1).png" alt="" @click="exit(2)">
                                <img src="../../static/img/icon1 (3).png" alt="">
                            </div>
                    </div>
                    <div class="bottom_right">
                            <span>{{time}}</span> 
                    </div>
                </div>
         </dv-full-screen-container>
        <!-- </div> -->

</template>

<script>
import maps from './common/map'  
import RightBottomCmp from './scoreAnalysis/RightBottomCmp'
import LeftMiddleCmp from './scoreAnalysis/LeftMiddleCmp'
import RightTopCmp from './scoreAnalysis/RightTopCmp'
import LeftBottomCmp from './scoreAnalysis/LeftBottomCmp'
import LeftTopCmp from './scoreAnalysis/LeftTopCmp'
import RightMiddleCmp from './scoreAnalysis/RightMiddleCmp'
export default {
    components:{
        maps,RightBottomCmp,LeftMiddleCmp,RightTopCmp,LeftBottomCmp,LeftTopCmp,RightMiddleCmp
    },
    data() {
        return {
            time :"",
            flag:false,
            changeFlag:true
        }
    },
    methods: {
        change (type) {
            if ( type == 1 ){
                this.changeFlag = false
                setTimeout( () => {
                 this.$refs.LeftTopCmp.init1()
                 this.$refs.LeftMiddleCmp.init1()
                 this.$refs.RightTopCmp.init1()
                 this.$refs.RightMiddleCmps.name = "行业预警指数"
                 this.$refs.RightMiddleCmps.config = {
                        data: [
                            {
                                name: '医疗',
                                value: 1.6
                            },
                            {
                                name: '体育场馆',
                                value: 2.6
                            },
                            {
                                name: '教学',
                                value: 4.9
                            },
                            {
                                name: '剧院',
                                value: 5.6
                            },
                            {
                                name: '办公商务',
                                value: 6.6
                            },
                            {
                                name: '商业',
                                value: 7.69
                            },
                            {
                                name: '综合建筑',
                                value: 9.06
                            },
                            
                        ],
                 }
              },600)
            }else if ( type == 2 ) {
                this.changeFlag = false
                //  setTimeout( () => {
                //     this.$refs.LeftTopCmp.init()
                //     this.$refs.LeftMiddleCmp.init()
                //     this.$refs.RightTopCmp.init()
                //  },600)
            }
            setTimeout( () => {
                this.changeFlag = true
            },500)
        },
        getTime () {
            this.time =  this.$moment( new Date() ).format("YYYY-MM-DD HH:mm:ss")
        },
        getTimeLoop () {
           this.timer = setInterval( ()=> {
                this.getTime()
            },1000)
        },
        showTransition () {
            setTimeout( () => {
                this.flag = true
            },500)
        },
        exit (type) {//退出
            if ( type == 1 ) {
                sessionStorage.clear();
                this.$router.push('/')
            }else if ( type = 2) {
                this.$router.push('/alarmData')
            }
        },
    },
    mounted() {
        this.getTime()
        this.getTimeLoop()
        this.showTransition()

    },
    destroyed() {
        clearInterval(this.timer)
    },
}
</script>


<style lang="scss">
   #dv-full-screen-container{
    //    height: 100%!important;
    //    color: #FFF;
        background-color: rgba(10, 32, 50, 0.5);
    }
    .headers{
        height: 100px;
        width: 100%;
        width: 100%;
        display: flex;
        justify-content:space-between;
        color: white;
        position: absolute;
        top: 0;
        z-index: 100;
        // background-color: #000001;
        // background-color: rgba(10, 32, 50, 1);
        .title{
            position: absolute;
            font-size: 30px;
            font-weight: 700;
            left: 50%;
            top: 15px;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%)
        }
    }
    .btn{
        width: 130px;
        height: 50px;
        position:absolute;
        top: 108px;
        left: 40%;
        color: #FFF;
        cursor: pointer;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        font-weight: bolder;
    }
    .area{
        left: calc( 40% + 140px);
    }
    .alarm_area{
        left: calc( 40% + 280px);
    }
    .chart_left{
        position: absolute;
        height:calc(100% - 180px);
        width: 20%;
        top: 100px;
        left: 2%;
        background-color: rgba(10, 32, 50, 0.5);
        color: #FFF;
        z-index: 100;
        .dv-border-box-1 .right-top,.dv-border-box-1 .right-bottom{
            display: none;
        }
        .left_tops{
            width: 94%;
            height: 26%;
            position: absolute;
            top: 3%;
            left: 4%;
        }
        .left_middle{
            width: 90%;
            height: 30%;
            position: absolute;
            top: 31%;
            left: 4%;
        }
        .left_bottom{
            width: 90%;
            height: 32%;
            position: absolute;
            bottom: 1%;
            left: 4%;
        }
    }
    .chart_right{
        position: absolute;
        height:calc(100% - 180px);
        width: 20%;
        top: 100px;
        right:2%;
        z-index: 100;

        background-color: rgba(10, 32, 50, 0.5);
        .dv-border-box-1 .left-bottom, .dv-border-box-1 .left-top{
            display: none;
        }
        .right_top{
            width: 90%;
            height: 30%;
            position: absolute;
            top: 3%;
            right: 4%;
        }
        .right_middle{
            width: 90%;
            height: 32%;
            position: absolute;
            top: 35%;
            left: 4%;
            color: #FFF;
            
        }
        .right_bottom{
            position: absolute;
            width: 90%;
            height: 28%;
            bottom: 1%;
            right: 4%;
        }

    }
  
    .bottom{
        height: 80px;
        width: 100%;
        position: absolute;bottom: 0;
        z-index: 100;
        color: #FFF;
        //  background-color: rgba(10, 32, 50, 1);
        .bottom_right{
            height: 100%;
            width: 20%;
            float: right;
            margin-right: 2%;
            font-size: 24px;
            // color: #08e5ff;
            background-color: rgba(10, 32, 50, .6);
            text-align: center;
            line-height: 80px;
        }
        .bottom_left{
            height: 100%;
            width: 20%;
            float: left;
            margin-left: 2%;
            font-size: 24px;
            background-color: rgba(10, 32, 50, .6);
            text-align: center;
            line-height: 80px;
            .bottom_content{
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                img{
                    cursor: pointer;
                }
            }
        }
        
    }
</style>