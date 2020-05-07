<template>
    <!-- <div class="wrapper"> -->
        <div  id="container" tabindex="0" > </div>
    <!-- </div> -->
</template>


<script>
import AMap from "AMap";
import Vue from 'vue'
export default {
    props:["module"],
    data() {
        return {
            center:[120.49994,30.092535],
            markers:[
                {
                    longitude:120.582474,
                    latitude:29.996887,
                    name:"绍兴剧院",
                    address:"浙江省绍兴市越城区人民中路61号",
                    phone:"14772362575",
                    firePhone:"15196231496"
                },
                {
                    longitude:120.578761,
                    latitude:29.985418,
                    name:"绍兴金帝银泰城",
                    address:"浙江省绍兴市越城区解放南路777号",
                    phone:"14772362575",
                    firePhone:"15196231496"
                },
                {
                    longitude:120.578114,
                    latitude:29.998034,
                    name:"越都社区",
                    address:"浙江省绍兴市越城区府山街道仓桥直街191号",
                    phone:"14772362575",
                    firePhone:"15196231496"
                },
                {
                    longitude:120.492391,
                    latitude:30.086583,
                    name:"柯桥银泰百货",
                    address:"浙江省绍兴市柯桥区笛杨路1531号",
                    phone:"14772362575",
                    firePhone:"15196231496"
                },
                {
                    longitude:120.499686,
                    latitude:30.091502,
                    name:"（柯桥区）国贸大厦",
                    address:"浙江省绍兴市柯桥区金柯桥大道1358",
                    firePhone:"15196231496",
                    phone:"14772362575",
                },
            ],
            infoArr:[],
            infodetail:''
        }
    },
    mounted() {
        if ( this.module == 0 ) {
            this.NProgress.start()
            this.axios({
                url:"/api/monitor/unit/home/list",
                method:"post",
                data:{
                    unitId:112
                }
            }).then ( res => {
                this.markers = res.data.data
                // console.log( this.markers )
                // this.center = [this.markers[0].longitude,this.markers[0].latitude]
                this.init()
                this.NProgress.done()
            })
        }else if ( this.module == 1 ) {
            this.init1()
        }else if ( this.module == 2 ) {
            this.init2()
        }
    },
    methods: {
        init2 () {
            var _this = this
            this.map2 = new AMap.Map('container', {
                // center: [116.397428, 39.90923],
                resizeEnable: true,
                zoom: 17,
                lang: "ch"
            });
            this.map2.on( "click", () => {
                if (_this.infoArr.length != 0) {
                    for (var i = 0; i < _this.infoArr.length; i++){
                        _this.infoArr[i].setMap(null);
                    }
                }
            })
            this.map2.setMapStyle("amap://styles/darkblue");
            //         AMap.plugin('AMap.Weather', function() {
            //     //创建天气查询实例
            //     var weather = new AMap.Weather();
            //     //执行实时天气信息查询
            //     weather.getForecast('江干区', function(err, data) {
            //         console.log(data);
            //     });
            // });
        },
        init1 () {
            var _this = this
            this.map1 = new AMap.Map('container', {
                center:_this.center,
                resizeEnable: true,
                zoom: 12,
                lang: "ch"
            });
            this.map1.on( "click", () => {
                if (_this.infoArr.length != 0) {
                    for (var i = 0; i < _this.infoArr.length; i++){
                        _this.infoArr[i].setMap(null);
                    }
                }
            })
            if (_this.infoArr.length != 0) {
                    for (var i = 0; i < _this.infoArr.length; i++){
                        _this.infoArr[i].setMap(null);
                    }
                }
           this.map1.setMapStyle("amap://styles/darkblue");
        },
        init () {
            var _this = this
            this.map = new AMap.Map('container', {
                center:_this.center,
                resizeEnable: true,
                zoom: 16,
                lang: "ch"
            });
            this.map.on( "click", () => {
                if (_this.infoArr.length != 0) {
                    for (var i = 0; i < _this.infoArr.length; i++){
                        _this.infoArr[i].setMap(null);
                    }
                }
            })
           this.map.setMapStyle("amap://styles/darkblue");
           var icon = require('../../../static/img/icon1 (4).png')
           this.markers.forEach( (marker,index) => {
                var index = new AMap.Marker({//创建点标记
                    map: _this.map,
                    icon,
                    position: [marker.longitude, marker.latitude],
                });
                index.on('click',showInfo)
                // _this.infoArr.push( index )
                // AMap.event.addListener(index, 'click', function() {
                // console.log("1111");
                // });
                function showInfo () {
                     var infoWindow = new AMap.InfoWindow({//信息窗口
                            offset: new AMap.Pixel(-100,42),
                            anchor: "top-left",
                            showShadow: true,
                            isCustom: true,
                            position: [marker.longitude, marker.latitude],                                                          
                        });
                        _this.infoArr.push(infoWindow)
                        infoWindow.setMap(_this.map);
                        _this.map.setCenter([marker.longitude, marker.latitude])
                        _this.axios({
                                url:'/api/monitor/unit/info',
                                method:'POST',
                                data:{
                                unitId:marker.id
                                }
                            }).then( res => {
                            _this.infodetail = res.data.data
                        var MyComponent = Vue.extend({
                            template: `<div style="background: rgba(10, 32, 50, .8);opacity: .9;width: 371px;height:170px;padding: 28px; box-sizing: border-box;color:#fff;position: relative;">
                                <div style="flex:390;">
                                 <h3 style="font-size:16px;">${_this.infodetail.name}</h3>
                                    <div style="width:300px;padding:15px 0;text-align: left;">
                                      <p style="font-size:14px;">地址:${_this.infodetail.address}</p>
                                      <p style="font-size:14px;margin:10px 0;">控制室电话:${_this.infodetail.fireControlRoomPhone}</p>
                                      <p style="font-size:14px;">主页负责人电话:${_this.infodetail.fireRunnerPhone}</p>
                                    </div>
                                </div>
                                <div class="arrows" style="position: absolute; top: -31px; left: 100px;border-right: 10px solid transparent;border-left: 10px solid transparent;border-bottom: 30px solid rgba(10, 32, 50, .8);"></div>
                            </div>`,
                        })
                        var component= new MyComponent().$mount();
                        infoWindow.setContent( component.$el )
                    })

                }
           })
        }
    },
}
</script>



<style lang="scss">
    .wrapper {
        height: 100%;
        width: 100%;
    }
    #container{
        height: 100%;
        width: 100%;
        outline: none!important;
    }
</style>