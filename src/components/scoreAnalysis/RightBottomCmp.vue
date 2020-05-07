<template>
  <div class="top-middle-cmp">
    <div class="chart-name">
        设备完好率周趋势
        <dv-decoration-3 style="width:200px;height:20px;" />
    </div>
    <dv-charts :option="option" style="width:100%;height:100%" />
  </div>
</template>

<script>
export default {
  name: 'TopMiddleCmp',
  data () {
    return {
      option: {
        // legend: {
        //   data: ['设备完好率'],
        //   textStyle: {
        //     fill: '#fff'
        //   }
        // },
        xAxis: {
          data: [
            '10/01', '10/02', '10/03', '10/04', '10/05', '10/06',
            '10/07', 
          ],
          boundaryGap: false,
          axisLine: {
            style: {
              stroke: '#FFF'
            }
          },
          axisLabel: {
            style: {
              fill: '#FFF',
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          data: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            style: {
              stroke: '#FFF'
            }
          },
          axisLabel: {
            style: {
              fill: '#FFF'
            },
            formatter ({ value }) {
              return value.toFixed(2)
            }
          },
          axisTick: {
            show: false
          },
          min: 95,
          max: 100,
          // interval: 0.5
        },
        series: [
          {
            data: [
              99.56, 99.66, 99.84, 99.22, 99.11, 99.45,
              99.44, 
            ],
            type: 'line',
            name: '设备完好率',
            smooth: true,
            lineArea: {
              show: true,
              gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
            },
            linePoint: {
              radius: 4,
              style: {
                fill: '#00db95'
              }
            },
            label: {
                show: true,
                formatter: '{value}'
            }
          }
        ]
      }
    }
  },
  methods: {
    getDate () {
    var now = new Date();
    var month = now.getMonth()+1
    var day = now.getDate()
    console.log(month,day)
  },
  },
  mounted() {
    // this.getDate()
  },
}
</script>

<style lang="scss">
.top-middle-cmp {
  position: relative;
  height: 100%;
  width: 100%;
  .chart-name {
    position: absolute;
    right: 6%;
    text-align: right;
    font-size: 20px;
    // top: 10px;
    color: #FFF;
  }
}
</style>
