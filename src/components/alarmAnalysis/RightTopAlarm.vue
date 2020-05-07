<template>
    <div id="main_pie"></div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        init () {
             this.myChart = echarts.init(document.getElementById('main_pie'));
             this.option = {
                title: {
                    text: '18501',
                    subtext: '报警总数',
                    left: 'center',
                    textStyle:{
                        color:"#FFF",
                        fontWeight:'bolder',
                        fontSize:22
                    },
                    left:"5%"
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                // legend: {
                //     orient: 'vertical',
                //     left: 'left',
                //     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                // },
                series: [
                    {
                        name: '报警数',
                        type: 'pie',
                        radius: '65%',
                        // center: ['50%', '60%'],
                        data: [
                            {value: 335, name: '远程监控系统'},
                            {value: 310, name: '智能预警'},
                            {value: 234, name: '智慧用电'},
                            {value: 135, name: '智慧用水'},
                            {value: 1548, name: '燃气监控'}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ],
                grid: {
                    bottom: '2%',
                    containLabel: true
                },
            };
             this.myChart.setOption(this.option);
        }
    },
    mounted() {
        this.init()
    },
}
</script>


<style lang="scss">
    #main_pie{
        height: 100%;
        width: 100%;
    }
</style>