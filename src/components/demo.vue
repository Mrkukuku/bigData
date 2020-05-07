<template>
    <div>
        <div id="c1"></div>
    </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        initChart(){
            // const data = [
            // { genre: 'Sports', sold: 275 },
            // { genre: 'Strategy', sold: 115 },
            // { genre: 'Action', sold: 120 },
            // { genre: 'Shooter', sold: 350 },
            // { genre: 'Other', sold: 150 },
            // ];

            // // Step 1: 创建 Chart 对象
            // const chart = new Chart({
            //     container: 'c1', // 指定图表容器 ID
            //     width: 600, // 指定图表宽度
            //     height: 300, // 指定图表高度
            // });

            // // Step 2: 载入数据源
            // chart.data(data);

            // // Step 3: 创建图形语法，绘制柱状图
            // chart.interval().position('genre*sold');

            // // Step 4: 渲染图表
            // chart.render();
            var data = [
                      {
                        "Date": "04.01.2016",
                        "Close": 126.12
                      },
                      {
                        "Date": "05.01.2016",
                        "Close": 125.688
                      },
                      {
                        "Date": "06.01.2016",
                        "Close": 119.704
                      },
                      {
                        "Date": "07.01.2016",
                        "Close": 120.19
                      },
                      {
                        "Date": "08.01.2016",
                        "Close": 121.157
                      },
                      {
                        "Date": "11.01.2016",
                        "Close": 117
                      },
                      {
                        "Date": "12.01.2016",
                        "Close": 111.487
                      },
                      {
                        "Date": "13.01.2016",
                        "Close": 122
                      },
                      {
                        "Date": "14.01.2016",
                        "Close": 117.76
                      },
                      {
                        "Date": "15.01.2016",
                        "Close": 114.397
                      },
                      {
                        "Date": "18.01.2016",
                        "Close": 116.373
                      },
                      {
                        "Date": "19.01.2016",
                        "Close": 120.547
                      },
                      {
                        "Date": "20.01.2016",
                        "Close": 113.733
                      },
                      {
                        "Date": "21.01.2016",
                        "Close": 114.098
                      },
                      {
                        "Date": "22.01.2016",
                        "Close": 123.833
                      },
                      {
                        "Date": "25.01.2016",
                        "Close": 125
                      },
                      {
                        "Date": "26.01.2016",
                        "Close": 124.866
                      },
                      {
                        "Date": "27.01.2016",
                        "Close": 120.264
                      },
                      {
                        "Date": "28.01.2016",
                        "Close": 122.296
                      },
                      {
                        "Date": "29.01.2016",
                        "Close": 124.502
                      },
                      {
                        "Date": "01.02.2016",
                        "Close": 127.936
                      },
                      {
                        "Date": "02.02.2016",
                        "Close": 132.513
                      },
                      {
                        "Date": "03.02.2016",
                        "Close": 129.95
                      },
                      {
                        "Date": "04.02.2016",
                        "Close": 129.275
                      },
                      {
                        "Date": "05.02.2016",
                        "Close": 127.898
                      },
                      {
                        "Date": "08.02.2016",
                        "Close": 134.9
                      },
                      {
                        "Date": "09.02.2016",
                        "Close": 122.819
                      },
                      {
                        "Date": "10.02.2016",
                        "Close": 120.108
                      },
                      {
                        "Date": "11.02.2016",
                        "Close": 119.447
                      },
                      {
                        "Date": "12.02.2016",
                        "Close": 117.8
                      },
                      {
                        "Date": "15.02.2016",
                        "Close": 122.8
                      },
                      {
                        "Date": "16.02.2016",
                        "Close": 121.865
                      },
                      {
                        "Date": "17.02.2016",
                        "Close": 126.3
                      },
                      {
                        "Date": "18.02.2016",
                        "Close": 128.259
                      },
                      {
                        "Date": "19.02.2016",
                        "Close": 125.724
                      },
                      {
                        "Date": "22.02.2016",
                        "Close": 130
                      },
                      {
                        "Date": "23.02.2016",
                        "Close": 129.948
                      },
                      {
                        "Date": "24.02.2016",
                        "Close": 132.5
                      },
                      {
                        "Date": "25.02.2016",
                        "Close": 128.08
                      },
                      {
                        "Date": "26.02.2016",
                        "Close": 122
                      },
                      {
                        "Date": "29.02.2016",
                        "Close": 122
                      },
                      {
                        "Date": "01.03.2016",
                        "Close": 123.449
                      },
                      {
                        "Date": "02.03.2016",
                        "Close": 130.139
                      },
                      {
                        "Date": "03.03.2016",
                        "Close": 132
                      },
                      {
                        "Date": "04.03.2016",
                        "Close": 135
                      },
                      {
                        "Date": "07.03.2016",
                        "Close": 123.905
                      },
                      {
                        "Date": "08.03.2016",
                        "Close": 125.155
                      },
                      {
                        "Date": "09.03.2016",
                        "Close": 126
                      },
                      {
                        "Date": "10.03.2016",
                        "Close": 126.778
                      },
                      {
                        "Date": "11.03.2016",
                        "Close": 129.656
                      },
                      {
                        "Date": "14.03.2016",
                        "Close": 127.64
                      },
                      {
                        "Date": "15.03.2016",
                        "Close": 124.786
                      },
                      {
                        "Date": "16.03.2016",
                        "Close": 124.469
                      },
                      {
                        "Date": "17.03.2016",
                        "Close": 123.5
                      },
                      {
                        "Date": "18.03.2016",
                        "Close": 124.061
                      },
                      {
                        "Date": "21.03.2016",
                        "Close": 123.5
                      },
                      {
                        "Date": "22.03.2016",
                        "Close": 129.002
                      },
                      {
                        "Date": "23.03.2016",
                        "Close": 129
                      },
                      {
                        "Date": "24.03.2016",
                        "Close": 131.31
                      },
                      {
                        "Date": "29.03.2016",
                        "Close": 133.354
                      },
                      {
                        "Date": "30.03.2016",
                        "Close": 129.298
                      },
                      {
                        "Date": "31.03.2016",
                        "Close": 127.4
                      },
                      {
                        "Date": "01.04.2016",
                        "Close": 122.376
                      },
                      {
                        "Date": "04.04.2016",
                        "Close": 119.467
                      },
                    ]

            function findMaxMin(data) {
      let maxValue = 0;
      let minValue = 50000;
      let maxObj = null;
      let minObj = null;
      for (const d of data) {
        if (d.Close > maxValue) {
          maxValue = d.Close;
          maxObj = d;
        }
        if (d.Close < minValue) {
          minValue = d.Close;
          minObj = d;
        }
      }
      return { max: maxObj, min: minObj };
    }

  
        const chart = new Chart({
          container: 'c1',
          autoFit: true,
          height: 500,
        //   width:800
        });
        chart.data(data);
        chart.scale({
          Date: {
            tickCount: 10
          },
          Close: {
            nice: true,
          }
        });
        chart.axis('Date', {
          label: {
            formatter: text => {
              const dataStrings = text.split('.');
              return dataStrings[2] + '-' + dataStrings[1] + '-' + dataStrings[0];
            }
          }
        });

        chart.line().position('Date*Close');
        // annotation
        const { min, max } = findMaxMin(data);
        chart.annotation().dataMarker({
          top: true,
          position: [max.Date, max.Close],
          text: {
            content: '全部峰值：' + max.Close,
          },
          line: {
            length: 30,
          }
        });
        chart.annotation().dataMarker({
          top: true,
          position: [min.Date, min.Close],
          text: {
            content: '全部谷值：' + min.Close,
          },
          line: {
            length: 50,
          }
        });
        chart.render();
    
        }
    },
    mounted() {
        this.initChart()
    },
}
</script>

<style lang="scss">
    
</style>