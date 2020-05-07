<template>
    <div class="waring_popout" v-if="cadFlag" @click.self="removeDot">
        <div id="cadimg" >
                <img src="../../../static/img/cad.png" alt="" @click.self="device_info=false">
                <div id="device_info" v-show="device_info"  @mouseenter="device_info=true" @mouseleave="device_info=false">
                    <div class="device_message">
                        <p>设备类型：{{deviceMessage.alias}}</p>
                        <p>设备地址：{{deviceMessage.install}}</p>
                        <p v-for="(item, index) in deviceMessage.phoneList" :key="index">联系人电话：{{item.name}}:{{item.phone}}</p>
                        <p id="device_detail">查看一个月内报警 >></p> 
                        <img src="../../../static/img/sic.png" alt="" class="sic" @click="go">
                        <p v-show="deviceAlarmlistFlag">报警总数: {{deviceAlarmlist && deviceAlarmlist.alarmCount}} </p>
                        <div v-show="deviceAlarmlistFlag" class="device_alarm">
                            <p v-for="item in deviceAlarmlist.alarmInfoReqList" :key="item.id">报警类型：{{item.alarmType}} 报警事件：{{item.alarmDate}}</p>
                        </div>

                    </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props:["move"],
    data() {
        return {
            deviceAlarmlistFlag:false,//设备历史报警开关
            deviceAlarmlist:'',//设备历史报警
            deviceMessage:'',//设备信息
            device_info:false,//报警设备信息框开关
            cadimg:'',//cad图片
            cadFlag:false,//cad图开关
        }
    },
    methods: {
        go () {
            this.$router.push('/sic')
        },
        showcad (id) {//查看cad
           this.axios({
               url:'/api/monitor/device/cad',
               method:"POST",
               data:{
                   id:612
               }
           }).then( res => {
               if( res.data.data){
                   this.cadimg = res.data.data.cadPictureUrl
                    if ( this.cadimg == "https://oss-kaleidoscope.oss-cn-hangzhou.aliyuncs.com/common/no_pic.gif"){
                       this.$alert( "此设备没用关联CAD图" )
                   }else{
                       this.cadFlag = true
                   }
                    res.data.data.deviceList && res.data.data.deviceList.map( item => {
                        this.$nextTick ( () => {
                            this.createDIv(item,612)
                        })
                    })
               }
           })
        },
        removeDot () {//隐藏cad及删除节点
           this.cadFlag = false
           this.device_info = false
        //    if ( this.move ) {
        //         this.move() 
        //     }
           var div = document.getElementById('cadimg')
           for ( var i=div.childNodes.length-1;i>=0;i-- ){ 
                if( div.childNodes[i].className == 'dotbox'){
                    div.removeChild(div.childNodes[i]);
                }
            }
        },
        handerclose () {//关闭报警框
            this.cadFlag = false
            var div = document.getElementById('cadimg')
            for ( var i=div.childNodes.length-1;i>=0;i-- ){ 
                   if( div.childNodes[i].className == 'dotbox'){
                       div.removeChild(div.childNodes[i]);
                   }
            }
        },
        createDIv(data,id){ //创建cad报警点
            var _this = this   
            var dotWidth=14
            var dotHeight=14
            var pulseWidth=16
            var pulseHeight=16
            var pulseBorder=3
            // 创建div盒子
            var odiv=document.createElement('div');
            var dot_div=document.createElement('div');
            var pulse_div=document.createElement('div');
            var device = document.getElementById('device_info')
            var deviceDetail =  document.getElementById('device_detail')
            // 给div添加class
            // dot_div.className='dot';
            // if( data.deviceId == id ) {
                // pulse_div.className='pulse';
                dot_div.className="dot_warning"
            // }
            odiv.className="dotbox"
            dot_div.onmouseenter  = function () {
                device.style.top = data.y*1-300+'px'
                device.style.left = data.x*1-400+'px'
                device.style.display = 'block'
                _this.deviceMessage = data
                _this.device_info = true
            }
            dot_div.onmouseleave = function () {
               _this.device_info = false
               _this.deviceAlarmlistFlag  =false
            }
            deviceDetail.onclick = function () {
               _this.axios({
                    url:"/api/monitor/device/alarmHistory",
                    method:"post",
                    data:{
                        id:data.deviceId
                    }
                }).then( res => {
                    _this.deviceAlarmlist = res.data.data
                    _this.deviceAlarmlist && _this.deviceAlarmlist.alarmInfoReqList.map( item => {
                       item.alarmDate = item.alarmDate && _this.$moment( item.alarmDate ).format("YYYY-MM-DD HH:mm:ss") || ''
                    })
                    _this.deviceAlarmlistFlag  =true
                })
            }
            //设置dot的位置x
            dot_div.style.left=data.x+'px';
            dot_div.style.top=data.y+'px';
            
            //设置pulse的位置
            pulse_div.style.left=parseInt(data.x)+dotWidth/2-pulseWidth/2-pulseBorder+'px';
            pulse_div.style.top=parseInt(data.y)+dotHeight/2-pulseHeight/2-pulseBorder+'px';
            
            // 把创建的盒子追加到页面上
            odiv.appendChild(dot_div);
            odiv.appendChild(pulse_div);
            document.getElementById('cadimg').appendChild(odiv);
        }, 
    },
    mounted() {
    },
}
</script>


<style lang="scss">

.waring_popout{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(75, 84, 91,.6);
            z-index:1900;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            top: 0;
            overflow: hidden;
            #cadimg{
                // width: 1000px;
                // height: 600px;
                width: 80%;
                height: 70%;
                position: absolute;
                top: 0;
                left: 50%;top: 45%;
                transform:translate(-50%,-50%);
                img{
                    width: 100%;
                    height: 100%;
                }
                #device_info{
                    height: 300px;
                    min-width: 400px;
                    position: absolute;
                    transition: all .5s;
                    padding: 0px 20px 20px 0px;
                    z-index: 10;
                    .device_message{
                        max-height: 260px;
                        min-width: 220px;
                        background-color: #232D36;
                        padding: 20px;
                        box-shadow:  1px 1px 1px #2C3A43;
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        bottom: 20px;
                        right: 20px;
                        p{
                            margin-bottom: 5px;
                        }
                        .sic{
                            height: 40px;
                            width: 40px;
                            position: absolute;
                            right: 0px;
                            bottom: 0px;
                            cursor: pointer;
                        }
                        #device_detail{
                            color: #F8B62D;
                            cursor: pointer;
                            img{
                                height: 30px;
                                width: 30px;
                            }
                        }
                        .device_alarm{
                            flex: 1;
                            overflow-y: auto;
                            padding-right:10px;
                            &::-webkit-scrollbar{
                                width: 5px;
                            }
                            &::-webkit-scrollbar-thumb { 
                                border-radius: 10px;
                                box-shadow: inset 0 0 5px #232D36;
                                background-color: black;
                                height: 30px;
                            } 
                        }
                    }

                }
                .dot{
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    background-color: orangered;
                    z-index: 2;
                }
                .dot_warning{
                    width: 28px;
                    height: 28px;
                    position: absolute;
                    border-radius: 50%;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    background-image: url("../../../static/img/fire.png");
                    background-size: 100%;
                    background-repeat: no-repeat;
                    // background-color: orangered;
                    z-index: 2;
                }
                .dotnow{
                    background-color: green;
                }
                .partdot{
                    border-radius: 0%;
                }

                /* 产生动画（向外扩散变大）的圆圈  */
                .pulse{
                    position: absolute;
                    width: 20px; 
                    height: 20px;
                    border: 3px solid red;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                    z-index: 1;
                    opacity: 0;
                    -webkit-animation: warn 3s ease-out;
                    -moz-animation: warn 3s ease-out;
                    animation: warn 3s ease-out;
                    -webkit-animation-iteration-count: infinite;
                    -moz-animation-iteration-count: infinite;
                    animation-iteration-count: infinite;
                }
                @keyframes warn {
                    0% {
                        transform: scale(1);   
                        opacity: 0.0;
                    }  
                    25% {  
                        transform: scale(1.2);      
                    }  
                    50% {  
                        transform: scale(1.4);  
                        opacity: 0.5;
                    }  
                    75% {  
                        transform: scale(1.6);  
                    }  
                    100% {  
                        transform: scale(2);  
                        opacity: 0.0;  
                    }  
                }
            }
    }

</style>