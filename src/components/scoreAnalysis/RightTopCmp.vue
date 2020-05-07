<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
        <div class="table-name">
           <div style="float: right;"> 平台设备接入总量:{{num}} </div> 
          <dv-decoration-2  dur=1 style="width:100%;height:5px;" />
        </div>
        <dv-scroll-board :config="config"  @click="open"/>
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num:4274,
      config: {
        data: [
          ['越都社区', '459'],
          ['绍兴金帝银泰城', '563'],
          ['柯桥银泰百货', '589'],
          ['（柯桥区）金汇大厦', '859'],
          ['（衢州市）吾悦华府', '746'],
          ['（柯桥区）国贸大厦', '590'],
          ['（柯桥区）银泰百货', '468'],
        ],
        index: true,
        columnWidth: [80,150],
        align: ['center'],
        oddRowBGC: 'rgba(9, 37, 50, 0.4)',
        evenRowBGC: 'rgba(10, 32, 50, 0.3)',
        rowNum:5,
        // header:["单位名称","接入设备数量"],
      }
    }
  },
  methods: {
      open (data) {
        console.log( data )
      },
      init () {
          this.num = 4274
          this.config = {
            data: [
            ['越都社区', '459'],
            ['绍兴金帝银泰城', '563'],
            ['柯桥银泰百货', '589'],
            ['（柯桥区）金汇大厦', '859'],
            ['（衢州市）吾悦华府', '746'],
            ['（柯桥区）国贸大厦', '590'],
            ['（柯桥区）银泰百货', '468'],
          ],
          index: true,
          columnWidth: [80,150],
          align: ['center'],
          oddRowBGC: 'rgba(9, 37, 50, 0.4)',
          evenRowBGC: 'rgba(10, 32, 50, 0.3)',
          rowNum:5,
          }
      },
      init1 () {
          this.num = 4674
          this.config = {
            data: [
            ['医疗', '469'],
            ['体育场馆', '553'],
            ['教学', '589'],
            ['剧院', '819'],
            ['办公商务', '806'],
            ['商业', '610'],
            ['综合建筑', '458'],
          ],
          index: true,
          columnWidth: [80,150],
          align: ['center'],
          oddRowBGC: 'rgba(9, 37, 50, 0.4)',
          evenRowBGC: 'rgba(10, 32, 50, 0.3)',
          rowNum:5,
          }
      }

  },
}
</script>

<style lang="scss">
.bottom-right-table-1 {
  width: 100%;
  height: 100%;

  .border-box-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    margin-bottom: 15px;
    color: white;
  }

  .dv-scroll-board {
    height: calc(100% - 60px);
  }
}
</style>
