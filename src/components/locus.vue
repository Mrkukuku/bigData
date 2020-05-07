<template>
    <div class="locus">
        <maps :module="2" ref="maps"></maps>
        <el-button @click="change" class="btn">  </el-button>
        <div class="waring_info" v-show="flag">
            <sic ref="sics" :hide = "hide"></sic>
        </div>
        <!-- <div id="box" ref="box">
            <div class="resizeT" ref="resizeT"></div>
            <div class="resizeB" ref="resizeB"></div>
            <div class="resizeL" ref="resizeL"></div>
            <div class="resizeR" ref="resizeR"></div>
        </div> -->
    </div>
</template>


<script>
import maps from './common/map'
import AMap from "AMap";
import sic from './alarmAnalysis/sicTest'
export default {
    components:{
        maps,sic
    },
    data() {
        return {
            lineArr:[[116.478935,39.977761],[116.478939,39.977825],[116.478912,39.978549],[116.478912,39.978549],[116.478978,39.978555],[116.478978,39.978555],[116.479282,39.97856],[116.479658,39.978528],[116.480151,39.978453],[116.480784,39.978302],[116.480784,39.978302],[116.481149,39.978184],[116.481573,39.977977],[116.481863,39.977846],[116.482072,39.977718],[116.482362,39.977718],[116.483633,39.978935],[116.48367,39.978968],[116.484648,39.999861]],
            lineArr1:[[116.478935,39.987761],[116.478939,39.987825],[116.478912,39.988549],[116.478912,39.988549],[116.478988,39.988555],[116.478988,39.988555],[116.479282,39.98856],[116.479658,39.988528],[116.480151,39.988453],[116.480784,39.988302],[116.480784,39.988302],[116.481149,39.988184],[116.481573,39.987997],[116.481863,39.987846],[116.482072,39.987718],[116.482362,39.987718],[116.483633,39.988935],[116.48367,39.988968],[116.484648,39.999861]],
            markers:[],
            line:[],
            flag:false
        }
    },
    methods: {
        stretchs () {
             var box = this.$refs.box
             var resizeT = this.$refs.resizeT
             var resizeB = this.$refs.resizeB
             var resizeL = this.$refs.resizeL
             var resizeL = this.$refs.resizeL
             var resizeR = this.$refs.resizeR
             var dragMinWidth=300;
             var dragMinHeight=300;
             function resize(oparent,handle,isleft,istop,lookx,looky){
                var disX=0;
                var disY=0;
                handle=handle||box;
                handle.onmousedown=function(e){
                    e=e||event;
                    e.preventDefault();
                    disX=e.clientX-this.offsetLeft;
                    disY=e.clientY-this.offsetTop;
                    var iparenttop=oparent.offsetTop;
                    var iparentleft=oparent.offsetLeft;
                    var iparentwidth=oparent.offsetWidth;
                    var iparentheight=oparent.offsetHeight;
                    document.onmousemove=function(e){
                        e=e||event;
                        var iL=e.clientX-disX;
                        var iT=e.clientY-disY;
                        var maxw=document.documentElement.clientWidth-oparent.offsetLeft-2;
                        var maxh=document.documentElement.clientHeight-oparent.offsetTop-2;
                        var iw= isleft?iparentwidth-iL:handle.offsetWidth+iL;
                        var ih = istop ? iparentheight - iT : handle.offsetHeight + iT;
                        if (isleft) {
                            oparent.style.left=iparentleft+iL+'px';
                        };
                        if (istop) {
                            oparent.style.top=iparenttop+iT+'px';
                        };
                        if (iw<dragMinWidth) {
                            iw=dragMinWidth
                        }else if (iw>maxw) {
                            iw=maxw;
                        };
                        if (lookx) {
                            oparent.style.width=iw+'px';
                        };
                        if (ih<dragMinHeight) {
                            ih=dragMinHeight;
                        }else if (ih>maxh) {
                            ih=maxh;
                        };
                        if (looky) {
                            oparent.style.height=ih+'px';
                        };
                        if ((isleft && iw==dragMinWidth)||(istop && ih==dragMinHeight)) {
                            document.onmousemove=null;
                        };
                        return false;
                    };
                    document.onmouseup = function(){
                        document.onmousemove = null;
                        document.onmouseup = null;
                    }
                };
            };
             resize(box,resizeB,false,false,false,true);
             resize(box,resizeR,false,false,true,false);
             resize(box,resizeT,false,true,false,true);
             resize(box,resizeL,true,false,true,false);
        },
        stretch () {
            var oBox = document.getElementById('box');
            oBox.onmousedown = function(e){
                e = e ||event;
                var x = e.clientX;
                var y = e.clientY;
                var oBoxL = oBox.offsetLeft;
                var oBoxT = oBox.offsetTop;
                var oBoxW = oBox.offsetWidth;
                var oBoxH = oBox.offsetHeight;
                var d = 0;
                if(x < oBoxL + 10){
                    d = 'left';
                }
                else if(x > oBoxL + oBoxW -10){
                    d = 'right';
                }

                if(y < oBoxT + 10){
                    d = 'top';
                }
                else if(d < oBoxT + oBoxH -10){
                    d = 'bottom';
                }
                if(x < oBoxL + 10 && y < oBoxT + 10){
                    d ='LT';
                }
                document.onmousemove = function(e){
                    e = e ||event;
                    var xx = e.clientX;
                    var yy = e.clientY;
                    if(d == 'left'){
                        oBox.style.width = oBoxW + x -xx + 'px'
                        oBox.style.left = xx  + 'px';
                    }
                    else if(d == 'right'){
                        oBox.style.width = oBoxW + xx -x + 'px'
                    }

                    if(d == 'top'){
                        oBox.style.height = oBoxH + y - yy + 'px';
                        oBox.style.top = yy + 'px';
                    }
                    else if(d == 'bottom'){
                        oBox.style.height = oBoxH + yy - y + 'px';
                    }
                    if(d == 'LT'){
                        oBox.style.width = oBoxW + x -xx + 'px'
                        oBox.style.left = xx  + 'px';
                        oBox.style.height = oBoxH + y - yy + 'px';
                        oBox.style.top = yy + 'px';
                    }
                    return false;
                }
                document.onmouseup = function(){
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
                if(e.preventDefault){
                    e.preventDefault();
                }
            }
        },
        show () {
            this.flag = true
        },
        hide () {
            this.flag = false
        },
        move () {
            var map = this.$refs['maps'].map2,
                that = this
            if ( this.line.length != 0 ) {
                map.remove(that.line)
            }
          
            if (this.markers.length != 0) {
              for (var i = 0; i < this.markers.length; i++)
              this.markers[i].setMap(null);
            }
          map.setCenter(that.lineArr[0])
          that.marker = new AMap.Marker({
                map: map,
                position: that.lineArr[0],
                icon: "https://webapi.amap.com/images/car.png",
                offset: new AMap.Pixel(-26, -13),
                autoRotation: true,//是否自动旋转
                angle:-90,
            });
          that.marker2 = new AMap.Marker({
                map: map,
                position: that.lineArr1[0],
                icon: "https://webapi.amap.com/images/car.png",
                offset: new AMap.Pixel(-26, -13),
                autoRotation: true,//是否自动旋转
                angle:-90,
            });
           that.marker1 = new AMap.Marker({
                map: map,
                position: [116.484648,39.999861],
                icon: require('../../static/img/huo.png'),
                offset: new AMap.Pixel(0, -30),
            });
            that.marker1.on('click',show)
            function show () {
                that.show()
            }
            this.markers.push( this.marker)
            this.markers.push( this.marker1)
            this.markers.push( this.marker2)
            // that.polyline = new AMap.Polyline({
            //     map: map,
            //     path: that.lineArr,
            //     showDir:true,
            //     strokeColor: "#28F",//线颜色
            //     // strokeOpacity: 1,//线透明度
            //     strokeWeight: 6,//线宽
            //     // strokeStyle: "solid"//线样式
            // });
            that.passedPolyline = new AMap.Polyline({
                map: map,
                showDir:true,
                strokeColor: "#28F",//线颜色
                strokeWeight: 6,//线宽
            });
            that.passedPolyline1 = new AMap.Polyline({
                map: map,
                showDir:true,
                strokeColor: "#28F",//线颜色
                strokeWeight: 6,//线宽
            });
            this.line.push(that.passedPolyline)
            this.line.push(that.passedPolyline1)
            that.marker.on('moving', function (e) {
                that.passedPolyline.setPath(e.passedPath);
            });
            that.marker2.on('moving', function (e) {
                that.passedPolyline1.setPath(e.passedPath);
            });
            map.setFitView();
            that.marker.moveAlong(that.lineArr, 5000);
            that.marker2.moveAlong(that.lineArr1, 2000);
        },
        change () {
            // if ( this.flag ) {

            //     this.lineArr = [
            //         [117.478935,39.997761],[117.478939,39.997825],[117.478912,39.998549],[117.478912,39.998549],[117.478998,39.998555],[117.478998,39.998555],[117.479282,39.99856],[117.479658,39.998528],[117.480151,39.998453],[117.480784,39.998302],[117.480784,39.998302],[117.481149,39.998184],[117.481573,39.997997],[117.481863,39.997846],[117.482072,39.997718],[117.482362,39.997718],[117.483633,39.998935],[117.48367,39.998968],[117.484648,39.999861]
            //     ]
            // }else{
            //     this.lineArr = [
            //         [116.478935,39.997761],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861],
            //     ]
            // }
            // this.flag = !this.flag
            this.move()
        }
    },
    mounted() {
        // this.move()
        // this.stretch()
        this.stretchs()
    },
}
</script>


<style lang="scss">
    .locus{
        height: 100%;
        width: 100%;
        position: relative;
        .btn{
            position:absolute;
            top: 0;
        }
        .waring_info{
            width: 80%;
            height: 70%;
            position: absolute;
            top: 0;
            left: 50%;top: 45%;
            transform:translate(-50%,-50%);
        }
        #box{
            height: 500px;
            width: 500px;
            position: absolute;
            top: 100px;
            left: 100px;
            background-color: aqua;
            position: relative;
            .resizeT{
                width: 100%;
                height: 10px;
                position: absolute;
                top: 0;
                cursor: n-resize;
            }
            .resizeB{
                width: 100%;
                height: 10px;
                position: absolute;
                bottom: 0;
                cursor: n-resize;
            }
            .resizeL{
                width: 10px;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                cursor: w-resize;
            }
            .resizeR{
                width: 10px;
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                cursor: w-resize;
            }
        }
    }
</style>