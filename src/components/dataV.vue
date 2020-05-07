<template>
    <div class="wrapper">
        <dv-full-screen-container>

            <dv-loading v-if="loading">Loading...</dv-loading>
            <div class="border_box">
            <dv-border-box-1 ></dv-border-box-1>
            <dv-decoration-5 :reverse="true" style="width:60%;height:10%;margin-left:21%"/>
            </div>
            <dv-decoration-9 style="width:150px;height:150px;">66%</dv-decoration-9>
            <dv-active-ring-chart :config="config" style="width:300px;height:300px" />
            <dv-capsule-chart :config="config" style="width:300px;height:200px" />
            <dv-water-level-pond :config="config1" style="width:150px;height:200px" />
            <dv-scroll-board :config="config3" style="width:500px;height:220px" />
            <dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
            <dv-flyline-chart :config="config2" style="width:100%;height:30%;" />
           <!-- <dv-border-box-5></dv-border-box-5> -->
           <!-- <dv-border-box-8 >dv-border-box-8</dv-border-box-8> -->

        </dv-full-screen-container>
    </div>
</template>

<script>
export default {
    data() {
        const config10 = {
  number: [10, 100],
  content: '{nt}个{nt}元'
}

const config20 = {
  number: [100, 1000],
  content: '{nt}个{nt}元'
}
        return {
            loading:true,
            config:{
                data:[
                    {
                    name: '1 周口 span',
                    value: 55
                    },
                    {
                    name: '2 南阳',
                    value: 120
                    },
                    {
                    name: '3 西峡',
                    value: 78
                    },
                    {
                    name: '4 驻马店',
                    value: 66
                    },
                    {
                    name: '5 新乡',
                    value: 81
                    },
                    {
                    name: '6 驻马店1',
                    value: 67
                    },
                    {
                    name: '7 新乡1',
                    value: 80
                    },
                ],
                // lineWidth: 10,
            },
            config4:{
                data:[
                    {
                    name: '周口',
                    value: 55
                    },
                    {
                    name: '南阳',
                    value: 120
                    },
                    {
                    name: '西峡',
                    value: 78
                    },
                    {
                    name: '驻马店',
                    value: 66
                    },
                    {
                    name: '新乡',
                    value: 80
                    }
                ],
            },
            config1:{
                 data: [66, 45],
                 shape: 'roundRect'
            },
            config2:{
                    centerPoint: [0.48, 0.35],
                    points: [
                        {
                        position: [0.52, 0.235],
                        text: '新乡'
                        },
                        {
                        position: [0.43, 0.29],
                        text: '焦作'
                        },
                        {
                        position: [0.59, 0.35],
                        text: '开封'
                        },
                        {
                        position: [0.53, 0.47],
                        text: '许昌'
                        },
                        {
                        position: [0.45, 0.54],
                        text: '平顶山'
                        },
                        {
                        position: [0.36, 0.38],
                        text: '洛阳'
                        },
                        {
                        position: [0.62, 0.55],
                        text: '周口'
                        },
                        {
                        position: [0.56, 0.56],
                        text: '漯河'
                        },
                        {
                        position: [0.37, 0.66],
                        text: '南阳'
                        },
                        {
                        position: [0.55, 0.81],
                        text: '信阳'
                        },
                        {
                        position: [0.55, 0.67],
                        text: '驻马店'
                        },
                        {
                        position: [0.37, 0.29],
                        text: '济源'
                        },
                        {
                        position: [0.20, 0.36],
                        text: '三门峡'
                        },
                        {
                        position: [0.76, 0.41],
                        text: '商丘'
                        },
                        {
                        position: [0.59, 0.18],
                        text: '鹤壁'
                        },
                        {
                        position: [0.68, 0.17],
                        text: '濮阳'
                        },
                        {
                        position: [0.59, 0.10],
                        text: '安阳'
                        }
                    ],
                    k: 0.5,
                    // bgImgUrl: '/img/flylineChart/map.jpg',
                    // centerPointImg: {
                    //     url: '/img/flylineChart/mapCenterPoint.png'
                    // },
                    // pointsImg: {
                    //     url: '/img/flylineChart/mapPoint.png'
                    // }
                
            },
            config3:{
                header: ['列1', '列2', '列3'],
                data: [
                    ['行1列1', '行1列2', '行1列3'],
                    ['行2列1', '行2列2', '行2列3'],
                    ['行3列1', '行3列2', '行3列3'],
                    ['行4列1', '行4列2', '行4列3'],
                    ['行5列1', '行5列2', '行5列3'],
                    ['行6列1', '行6列2', '行6列3'],
                    ['行7列1', '行7列2', '行7列3'],
                    ['行8列1', '行8列2', '行8列3'],
                    ['行9列1', '行9列2', '行9列3'],
                    ['行10列1', '行10列2', '行10列3']
                ],
                index: true,
                columnWidth: [50],
                align: ['center'],
                carousel: 'page'
            }
        }
    },
    methods: {
        dvLoading () {
            setTimeout( ( ) => {
                this.loading = false
            },1000)
        }
    },
    mounted() {
        this.dvLoading()
    },
}
</script>

<style lang="scss">
    .wrapper{
        background-color: #282c34;
        height: 100%;
        width: 100%;
        #dv-full-screen-container{
            display: flex;
            flex-wrap: wrap;
            padding: 2%;
        }
    }
    .border_box{
        height: 20%;
        width: 30%
    }
    .dv-border-box-8 svg{
         height: 20%;
        width: 30%;
    }
</style>