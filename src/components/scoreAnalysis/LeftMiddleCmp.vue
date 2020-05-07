<template>
    <div class="left_top">
        <div class="table-name">
           <div> {{ name }} </div> 
          <dv-decoration-2  dur="5" style="width:100%;height:5px;" />
        </div>
        <dv-scroll-ranking-board :config="config" style="width:100%;height:100%" />
    </div>
</template>



<script>
export default {
    data() {
        return {
            name:"区域安全排名",
            config:{
                data: [
                    {
                    name: '越都社区',
                    value: 99
                    },
                    {
                    name: '绍兴金帝银泰城',
                    value: 96
                    },
                    {
                    name: '柯桥银泰百货',
                    value: 78
                    },
                    {
                    name: '(柯桥区) 金汇大厦',
                    value: 82
                    },
                    {
                    name: '（衢州市）吾悦华府',
                    value: 80
                    },
                    {
                    name: '（柯桥区）国贸大厦',
                    value: 86
                    },
                    {
                    name: '（柯桥区）银泰百货',
                    value: 83
                    }
                ]
            }
        }
    },
    methods: {
        init () {
            this.name = "区域安全排名"
            this.config = {
                data: [
                    {
                    name: '越都社区',
                    value: 99
                    },
                    {
                    name: '绍兴金帝银泰城',
                    value: 96
                    },
                    {
                    name: '柯桥银泰百货',
                    value: 78
                    },
                    {
                    name: '(柯桥区) 金汇大厦',
                    value: 82
                    },
                    {
                    name: '（衢州市）吾悦华府',
                    value: 80
                    },
                    {
                    name: '（柯桥区）国贸大厦',
                    value: 86
                    },
                    {
                    name: '（柯桥区）银泰百货',
                    value: 83
                    }
                ]
            }
        },
        init1 () {
            this.name = "行业排名"
            this.config = {
                data:[
                 {
                    name: '医疗',
                    value: 96
                    },
                    {
                    name: '体育场馆',
                    value: 96
                    },
                    {
                    name: '教学',
                    value: 84
                    },
                    {
                    name: '剧院',
                    value: 82
                    },
                    {
                    name: '办公商务',
                    value: 89
                    },
                    {
                    name: '商业',
                    value: 86
                    },
                    {
                    name: '综合建筑',
                    value: 83
                }
              ]
            }
        }
    },
}
</script>



<style lang="scss">
    .left_top{
        position: relative;
        // padding: 0 50px;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        .dv-scroll-ranking-board .ranking-info .rank{
            color: rgba(3, 166, 224, 0.8);;
            // color: rgb(63, 170, 203);
        }
        .dv-scroll-ranking-board .ranking-column .inside-column{
            background-color: rgba(3, 166, 224, 0.8);
            // background-color: rgb(63, 170, 203)
        }
        .dv-scroll-ranking-board .ranking-column{
            border-bottom: 2px solid rgba(3, 166, 224, 0.8);
            // border-bottom: 2px solid rgb(63, 170, 203)
        }
    }
</style>