<template>
    <div class="hot_wrapper">
        <div class="map">
            <div style="height:100%;width:100%;outline: none!important;" id="container" tabindex="0"> </div>
        </div>
        <el-button type="primary" @click="change" style="float:left">切换</el-button>
    </div>
</template>


<script>
import AMap from "AMap";
export default {
    data() {
        return {
            adCode: 330800, // 衢州市code
            // adCode: 420100, // 武汉市code
            disProvince: null, // 区域图层
            depth: 2, // 区域等级 0省级 1市级 2区县级
            colors: {}, // 区域颜色
            heatmap: null, // 热力图
            // city: '武汉市',
            city: '衢州市',
        }   
    },
    methods: {
    change () {
        var data = []
      
        for( var i=0; i<500; i++ ) {
              var lng = 119.24185
              var lat = 29.260089
              var index = Math.random() * 2
              if ( index >=1.5 ) {
                  index = 1
              }else{
                  index = -1
              }
              var num = Math.random()*1.5*Math.pow(-1,index)
              var num1 = Math.random()*1.2*Math.pow(-1,index)
              var num2 = Math.random()*150*Math.pow(-1,index)
            data.push(
                {
                    lng:lng+num1,
                    lat:lat+num,
                    count:80+num2
                }
            )
        }
       this.heatmap.setDataSet({
            data
        })
    },
                
    initMap() {// 创建地图
      var that = this
      this.map = new AMap.Map('container', {
        zoom:9,
        zooms: [9,12],
        center:[118.87263,28.941708],
        resizeEnable: true,
        showIndoorMap: false,
        mapStyle:"amap://styles/darkblue",
        features:['point'],
        viewMode:"2D",
        pitch:45
        // zoomEnable:false,
        // dragEnable: false,
      })
      this.map.on( "hotspotclick", (data) => {
          console.log(data)
      })
      AMap.plugin('AMap.DistrictSearch', function () {//区域遮盖

            new AMap.DistrictSearch({
                extensions: 'all',
                subdistrict: 0
            }).search(that.city, function(status, result) {// 外多边形坐标数组和内多边形坐标数组
                var outer = [
                new AMap.LngLat(-360, 90, true),
                new AMap.LngLat(-360, -90, true),
                new AMap.LngLat(360, -90, true),
                new AMap.LngLat(360, 90, true)
                ]
                var holes = result.districtList[0].boundaries
                var pathArray = [outer]
                pathArray.push.apply(pathArray, holes)
                var polygon = new AMap.Polygon({
                    pathL: pathArray,
                    strokeColor: '#FCF9F2',
                    strokeWeight: 1,
                    fillColor: 'rgba( 0 , 0, 1, 1)', // 遮罩背景色
                    fillOpacity: 1
                })
                polygon.setPath(pathArray)
                that.map.add(polygon)
            })
        })
      
    },
   
    initPro(code, dep) { // 创建区域图层
        let that = this
        // this.disProvince && disProvince.setMap(null)
       AMap.plugin('AMap.DistrictLayer', function () {
       that.disProvince = new AMap.DistrictLayer.Province({
            zIndex: 12,
            adcode: [code],
            // NAME_CHN:that.city,
            depth: dep,
            styles: {
            fill: function(properties) {
                // properties为可用于做样式映射的字段，包含
                // NAME_CHN:中文名称
                // adcode_pro
                // adcode_cit
                // adcode
                var adcode = properties.adcode
                // console.log(properties.adcode)
                // return that.getColorByAdcode(adcode)
            },
            'province-stroke': 'cornflowerblue',
            'city-stroke': 'white', // 中国地级市边界
            'county-stroke': 'rgba(255,255,255,0.5)' // 中国区县边界
            }
        })
         that.disProvince.setMap(that.map)
       })
      
    },
        
    getColorByAdcode(adcode) {// 颜色辅助方法
            // console.log(adcode)
        if (!this.colors[adcode]) {
            var gb = Math.random() * 155 + 50;
            // this.colors[adcode] = "#FCF9F2"
            // this.colors[adcode] = '#F8B62D'
            this.colors[adcode] = 'rgb(' + gb + ',' + gb + ',255)'
            // console.log(this.colors[adcode])
        }
        return this.colors[adcode]
    },
        
    lockMapBounds() {// 限制地图显示范围
        var bounds = this.map.getBounds()
        this.map.setLimitBounds(bounds)
    },
        
    drwaHeatmap(heatmapData) {// 绘制热力图
        var that = this
        if (!this.isSupportCanvas()) {
            alert(
            '热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~'
            )
        }
        this.map.plugin(['AMap.Heatmap'], function() {
            // 初始化heatmap对象
            that.heatmap = new AMap.Heatmap(that.map, {
                radius: 12, // 给定半径
                opacity: [0, 0.8],
                gradient:{
                    0.2:'#03549B',
                    0.3: '#0CA2D8',
                    0.4: '#0F8240',
                    0.6: '#F8D40D',
                    0.9: '#D4703E',
                    1.0: '#C00311'
                },
        })
        var points =[
                {"lng":118.991031,"lat":28.988585,"count":50},
                {"lng":118.589275,"lat":28.925818,"count":41},
                {"lng":118.687444,"lat":28.810742,"count":22},
                {"lng":118.581707,"lat":28.940089,"count":33},
                {"lng":118.510588,"lat":28.880172,"count":44},
                {"lng":118.894816,"lat":28.91181,"count":35},
                {"lng":118.716002,"lat":28.952917,"count":16},
                {"lng":118.991033,"lat":28.988585,"count":50},
                {"lng":118.589270,"lat":28.925818,"count":41},
                {"lng":118.687436,"lat":28.810742,"count":22},
                {"lng":118.581769,"lat":28.940089,"count":33},
                {"lng":118.510515,"lat":28.880172,"count":44},
                {"lng":118.894869,"lat":28.91181,"count":35},
                {"lng":118.716055,"lat":28.952917,"count":16},
                {"lng":118.981031,"lat":28.988585,"count":50},
                {"lng":118.539275,"lat":28.925818,"count":41},
                {"lng":118.667444,"lat":28.810742,"count":22},
                {"lng":118.591707,"lat":28.940089,"count":33},
                {"lng":118.560588,"lat":28.880172,"count":44},
                {"lng":118.894816,"lat":28.91181,"count":35},
                {"lng":118.736002,"lat":28.952917,"count":19},
                {"lng":118.901033,"lat":28.988585,"count":50},
                {"lng":118.569270,"lat":28.925818,"count":41},
                {"lng":118.697436,"lat":28.810742,"count":22},
                {"lng":118.561769,"lat":28.940089,"count":53},
                {"lng":118.540515,"lat":28.880172,"count":44},
                {"lng":118.894869,"lat":28.91181,"count":35},
                {"lng":118.736055,"lat":28.952917,"count":16},
            ];
            that.heatmap.setDataSet({
                data: points, 
            })
        })

    },
    
    isSupportCanvas() {// 判断浏览区是否支持canvas
        var elem = document.createElement('canvas')
       return !!(elem.getContext && elem.getContext('2d'))
    },
    getData() {
        this.initMap()
        this.initPro(this.adCode, this.depth)
        this.lockMapBounds()
        this.drwaHeatmap()
    },

},
    mounted() {
    this.getData()
},

}
</script>

<style lang="scss">
    // .d{
    //     color: rgb(130,150,255)
    // }
    .hot_wrapper{
        height: 100%;
        width: 100%;
        // background-color: #000001
        .map{
            height: 100%;
            width: 50%;
            float: left;
        }
    }
</style>