<template>
                  
    <div class="box" ref="boxs">
            <video-player class="video-player-box"
                  :options="playerOptions"
                  :playsinline="true"
                  customEventName="customstatechangedeventname"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied"
                  >
            </video-player>
            <!-- <iframe
            src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://FQQOAB@open.ys7.com/D90997290/1.live&autoplay=1&audio=1&accessToken=at.adwmge2obk9whdcj2g349puuanx6gjzd-8ky64os3po-1tpz63g-wmxadp9rs&templete=undefined"
            width="600"
            height="400"
            id="ysopen"
            allowfullscreen
          >
          </iframe>
          <img src="http://img.ys7.com/group22/M00/58/22/CmGxeF4dc2GALWX4AATCUmIJtWQ724.jpg" alt="" style="height:100px;width:100px;"> -->
     
      <el-button @click="changes(0)" >切换</el-button>
      <el-button @click="changes(1)" >切换1</el-button>
    </div>
</template>

<script>
import "video.js/dist/video-js.css"
import "videojs-flash"
import { videoPlayer } from "vue-video-player"
import SWF_URL from 'videojs-swf/dist/video-js.swf'
import 'videojs-contrib-hls'
import html2canvas from 'html2canvas'
export default {
    components:{
        videoPlayer
    },
    data() {
    return {
      playerOptions: {
        // videojs options
        muted: true,
        autoplay: true,
        width: '460',
        height: '360',
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0,3.0],
        sources: [
          {
            // type: 'application/x-mpegURL',
            // src: "http://hls01open.ys7.com/openlive/ff63f3bd02f4452bbb0c1fa233d70582.hd.m3u8"
            // src: "http://hls01open.ys7.com/openlive/ff63f3bd02f4452bbb0c1fa233d70582.m3u8"
            // src: "http://60.191.94.121:9600/live/cameraid/1002219%240/substream/1.m3u8"
            // src:"http://hls01open.ys7.com/openlive/5bfc3288280549bca3e7d585b9992276.m3u8"
            src:"rtmp://rtmp01open.ys7.com/openlive/5bfc3288280549bca3e7d585b9992276"
          }
        ],
        techOrder: ['flash',"html5"],
        flash: {
          hls: {
            withCredentials: false
          },
          swf: SWF_URL
        },
       html5: { hls: { withCredentials: false } },
       hls:true,
       controlBar: {
            timeDivider: false,
            durationDisplay: false,
            remainingTimeDisplay: false,
            currentTimeDisplay: false, // 当前时间
            volumeControl: false, // 声音控制键
            playToggle: true, // 暂停和播放键
            progressControl: false, // 进度条
            fullscreenToggle: true // 全屏按钮
        },
      }
    }
  },
  methods: {
    changes (type) {
      // if ( type ) {
      //   this.$refs.palyers.src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://yang1129@open.ys7.com/D90997176/1.live&autoplay=1&audio=1&accessToken=at.adwmge2obk9whdcj2g349puuanx6gjzd-8ky64os3po-1tpz63g-wmxadp9rs&templete=undefined"
      // }else{
      //   this.$refs.palyers.src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://FQQOAB@open.ys7.com/D90997290/1.live&autoplay=1&audio=1&accessToken=at.adwmge2obk9whdcj2g349puuanx6gjzd-8ky64os3po-1tpz63g-wmxadp9rs&templete=undefined"
      // }

      // this.$nextTick( () => {

        var copyDom = this.$refs.boxs
          html2canvas(copyDom, {
                      allowTaint: false,
                      useCORS: true,
                      height: 400,
                      width: 400
                  }).then(canvas => {
                      this.printShow = true
                      canvas.style.width = parseFloat(canvas.style.width) * 0.8 + 'px'
                      canvas.style.height = parseFloat(canvas.style.height) * 0.8 + 'px'
                      setTimeout(() => {
                          // const container = document.querySelector('#view')
                          // while (container.hasChildNodes()) {
                          //     container.removeChild(container.firstChild)
                          // }
                          // toImage
                          const dataImg = new Image()
                          dataImg.src = canvas.toDataURL('image/png')
                          // document.querySelector('#view').appendChild(dataImg)
  
                          const alink = document.createElement("a");
                          alink.href = dataImg.src;
                          alink.download = "testImg.jpg";
                          alink.click();
                      }, 0)
                  });  
      // })
          //   var canvas = document.createElement("canvas");
          // canvas.getContext('2d').drawImage(this.$refs.boxs, 0, 0, 400, 400);
        
          // var img = document.createElement("img");
          // img.src = canvas.toDataURL("image/png");
          // img.width = 400;
          // img.height = 300;
          //  const alink = document.createElement("a");
          //   alink.href = img.src;
          //   alink.download = "testImg.jpg";
          //   alink.click();
          // console.log(this.$refs.boxs)
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
      return false;
      // player.play()
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>


<style lang="">
    .box{
      height: 600px;
      width: 600px;
      position: relative;
    }
    .shadow{
      position: absolute;
      height: 500px;
      width: 100%;
    }
</style>