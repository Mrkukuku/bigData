<template>
    <div class="wrapper">
        <div id="container0"></div>
        <div id="container1"></div>
        <div id="container2"></div>
        <div id="container3"></div>
         <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city"> </el-checkbox>
            </el-checkbox-group>
        <el-checkbox v-model="checked">备选项</el-checkbox>

        </div>
</template>

<script>
export default {
    data() {
        return {
            checkAll: false,
            checkedCities: [],
            cities: [20,30,40,50],
            isIndeterminate: true,
            checked:""
        }
    },
    methods: {
         handleCheckAllChange(val) {
            this.checkedCities = val ? this.cities : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        initChart () {
            const container = document.getElementById('container0')
            this.myChart = new this.$Charts(container)
            this.myChart.setOption({
                title: {
                    text: '周销售额趋势'
                },
                legend: {
                    data: ['系列A', '系列B', '系列C']
                },
                 tooltip: {
                    trigger: 'axis',
                    showContent: true
                },
                xAxis: {
                    name: '第一周',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '销售额',
                    data: 'value'
                },
                series: [
                    {
                        name: '系列A',
                        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                        type: 'line',
                        stack: 'a',
                        fill: {
                            show: true
                        },
                        label: {
                            show: true,
                            formatter: '{value}'
                        }
                    },
                    {
                        name: '系列B',
                        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                        type: 'line',
                        stack: 'a',
                        smooth: true,
                        label: {
                            show: true,
                            formatter: '{value}'
                        }
                    },
                    {
                        name: '系列C',
                        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                        type: 'line',
                        stack: 'a',
                        lineStyle: {
                            lineDash: [5, 5]
                        },
                        label: {
                            show: true,
                            formatter: '{value}'
                        }
                    }
                ],
                show:true
            })
        },
        initChart1 () {
            const container1 = document.getElementById('container1')
            this.myChart1 = new this.$Charts(container1)
            this.myChart1.setOption({
                title: {
                    text: '畅销饮料占比饼状图'
                },
                series: [
                    {
                    type: 'pie',
                    data: [
                        { name: '可口可乐', value: 93 },
                        { name: '百事可乐', value: 32 },
                        { name: '哇哈哈', value: 65 },
                        { name: '康师傅', value: 44 },
                        { name: '统一', value: 52 },
                    ],
                    insideLabel: {
                        show: true
                    }
                    }
                ]
            })
        },
        initChart2 () {
            const container2 = document.getElementById('container2')
            this.myChart2 = new this.$Charts(container2)
            this.myChart2.setOption({
                title: {
                    text: '周销售额趋势'
                },
                xAxis: {
                    name: '第一周',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    name: '销售额',
                    data: 'value'
                },
                series: [
                    {
                        data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
                        type: 'bar',
                        backgroundBar: {
                            show: true
                        },
                        label: {
                            show: true,
                            formatter: '{value}'
                        }
                    }
                ]
            })
        },
         initChart3 () {
            const container3 = document.getElementById('container3')
            this.myChart3 = new this.$Charts(container3)
            this.myChart3.setOption({
                series: [
                    {
                    type: 'gauge',
                    startAngle: -Math.PI / 2,
                    endAngle: Math.PI * 1.5,
                    arcLineWidth: 25,
                    data: [
                        { name: 'itemA', value: 65, gradient: ['#03c2fd', '#1ed3e5', '#2fded6'] }
                    ],
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    dataItemStyle: {
                        lineCap: 'round'
                    },
                    details: {
                        show: true,
                        formatter: `{value}/2000`,
                        style: {
                            fill: '#1ed3e5',
                            fontSize: 35
                        }
                    }
                    }
                ]
            })
         },
        resize () {
            var that = this
             window.onresize = function(){
                that.myChart.resize();
                that.myChart1.resize();
                that.myChart2.resize();
            }
        },
    },
    mounted() {
        this.initChart()
        this.initChart1()
        this.initChart2()
        this.initChart3()
        // this.resize()
    },
    
}
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    #container0,#container1,#container2,#container3{
        width: 30%;
        height: 40%;
    }
</style>