<template>
    <div class="sic_test_wrapper">
         <div class="sic_head">
             <div style="float: left;margin-left:15px;">
                  <img src="../../../static/img/icon_sp_fh.png" alt="" @click="back">
             </div>
            <div  @click="multiSscreen(5)"> <img src="../../../static/img/icon_sp_p5.png" alt="" :class="{color:false}"> </div>
            <div class="interval" @click="multiSscreen(4)"> <img src="../../../static/img/icon_sp_p4.png" alt="" :class="{color:false}" > </div>
            <div class="interval" @click="multiSscreen(3)"> <img src="../../../static/img/icon_sp_p3.png" alt="" :class="{color:false}" > </div>
            <div class="interval" @click="multiSscreen(2)"> <img src="../../../static/img/icon_sp_p2.png" alt="" :class="{color:false}" > </div>
            <div class="interval" @click="multiSscreen(1)">  <img src="../../../static/img/icon_sp_p1.png" alt="" :class="{color:true}" > </div>
        </div>
        <div class="video">
            <div class="content" >
                <video-player class="video-player-box player"
                    ref="videoPlayer0"
                    :options="playerOptions1"
                    :playsinline="true"
                    >
                </video-player>
            </div>
        </div>
    </div>
</template>


<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
export default {
    props:["hide"],
    components:{
       videoPlayer
   },
    data() {
        return {
            playerOptions1: {//实时播放器
                muted: false,
                autoplay: true,
                language: 'en',
                preload:'auto',
                // fluid: true,
                sources: [
                    {
                        src: "http://60.191.94.121:9600/live/cameraid/1002219%240/substream/1.m3u8"
                        // src: "rtmp://58.200.131.2:1935/livetv/hunantv"
                    }
                ],
                techOrder: ["html5",],// 兼容顺序
                html5: { hls: { withCredentials: false } },
                hls:true,
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false,
                    remainingTimeDisplay: false,
                    currentTimeDisplay: false, // 当前时间
                    volumeControl: false, // 声音控制键
                    playToggle: false, // 暂停和播放键
                    progressControl: false, // 进度条
                    fullscreenToggle: true // 全屏按钮
                },
            },
        }
    },
    methods: {
        back () {
        //    this.hide()
        },
        multiSscreen() {
            
        }
    },
}
</script>


<style lang="scss">
 .sic_test_wrapper{
    background: #FCF9F2;
    flex: 1;
    height: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    .sic_head{
            background-color: #364751;
            height: 48px;
            line-height: 57px;
            padding-right: 30px;
            .recovery{
                color: #F8B62D;
                cursor: pointer;
                margin-left: 10px;
            }
            div{
                float: right;
                cursor: pointer;
            }
            .interval{
                margin-right: 17px;
            }
            .color{
                background: #F8B62D;
            }
            .el-input__inner{
                background: #2C3A43;
                border: none;
                margin-top: 4px;
            }
            .el-range-editor .el-range-input{
                background-color: #2C3A43;
                color: #FFF;
            }
        }
        .video{
            // padding: 1%;
            flex: 1;
            box-sizing: border-box;
            .content{
                width: 100%;
                height: 100%;
                background-color: #232D36;
                position: relative;
            }
            .player{
                height: 100%;
                width: 100%;
                .video-js{
                    height: 100%;
                    width: 100%;
                }
                .video-js .vjs-big-play-button{
                    top: 50%;
                    left: 50%;
                    display: none;
                }
            }
        } 
 }
    
</style>