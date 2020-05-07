<template>
    <div class="bottoms">
        <div class="table-name">
           <div> 单位物联接入信息 </div> 
           <dv-decoration-2  style="width:100%;height:5px;" />
        </div>
        <div class="instrumented">

                <div class="content">
                    <el-progress type="circle" :percentage="95" color="#F56868" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">7/8</span>
                        <img src="../../../static/img/Xitong_icon_ycjk.png" alt="" class="alarm_img">
                </div>
                <div class="content">
                    <el-progress type="circle" :percentage="90" color="#41CCBA" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">103/116</span>
                        <img src="../../../static/img/Xitong_icon_zhys.png" alt="" class="alarm_img">
                </div>
                <div class="content">
                    <el-progress type="circle" :percentage="86" color="#A582EA" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">524/596</span>
                        <img src="../../../static/img/Xitong_icon_zhyd.png" alt="" class="alarm_img">
                </div>
                <div class="content">
                    <el-progress type="circle" :percentage="94" color="#F5C379" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">1142/1263</span>
                        <img src="../../../static/img/Xitong_icon_znyj.png" alt="" class="alarm_img">
                </div>
                <div class="content">
                    <el-progress type="circle" :percentage="75" color="#B4C6CC" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">240/350</span>
                        <img src="../../../static/img/Xitong_icon_rqjk.png" alt="" class="alarm_img">
                </div>
                <div class="content">
                    <el-progress type="circle" :percentage="85" color="#74D28C" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">260/365</span>
                        <img src="../../../static/img/Xitong_icon_zndz.png" alt="" class="alarm_img">
                </div>
                <div class="content">
                    <el-progress type="circle" :percentage="95" color="#F4966E" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">162/169</span>
                        <img src="../../../static/img/Xitong_icon_znss.png" alt="" class="alarm_img">
                </div>
                <div class="content">
                    <el-progress type="circle" :percentage="91" color="#64B2EF" :show-text= false :width= 60 :stroke-width=4></el-progress>
                        <span  class="percentage">389/412</span>
                        <img src="../../../static/img/Xitong_icon_spjk.png" alt="" class="alarm_img">
                </div>
        </div>
    </div>
        
</div>
</template>


<script>
export default {
   data() {
       return {
           
       }
   },
}
</script>

<style lang="scss">
    .bottoms{
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        .instrumented{
            flex: 1;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .content{
                height: 49%;
                width: 25%;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .alarm_img{
                    position: absolute;
                    opacity: .8;
                    top: 50%;
                    left: 50%;
                    transform:translate(-50%,-50%);
                }
                .percentage{
                    font-size: 13px;
                    margin-top: 3%;
                    position: absolute;
                    bottom: 4%;
                }
                .el-progress--circle{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform:translate(-50%,-50%);
                }
            }
            .el-progress  path:first-child {
                stroke: rgba(10,32,50,0.8);
            }
        }
    }
</style>