<template>
   <div class="tops">
         <div class="table-name">
            <div style="float: right;"> {{name}} </div> 
            <dv-decoration-2  dur=1 style="width:100%;height:5px;" />
        </div>
       <div class="firefighting">
          <dv-capsule-chart :config="config" style="width:100%;height:100%" />
       </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:"单位预警指数",
            config:{
                data: [
                    {
                        name: '越都社区',
                        value: 1
                    },
                    {
                        name: '绍兴金帝银泰城',
                        value: 2.6
                    },
                    {
                        name: '（柯桥区）国贸大厦',
                        value: 3.9
                    },
                    {
                        name: '（柯桥区）银泰百货',
                        value: 4.6
                    },
                    {
                        name: '(柯桥区) 金汇大厦 ',
                        value: 5.6
                    },
                    {
                        name: '（衢州市）吾悦华府',
                        value: 8.69
                    },
                    {
                        name: '柯桥银泰百货',
                        value: 9.06
                    },
                    
                ],
            },
            methods: {
                init () {
                    this.name = "单位预警指数"
                    this.config = {
                        data: [
                            {
                                name: '越都社区',
                                value: 1
                            },
                            {
                                name: '绍兴金帝银泰城',
                                value: 2.6
                            },
                            {
                                name: '（柯桥区）国贸大厦',
                                value: 3.9
                            },
                            {
                                name: '（柯桥区）银泰百货',
                                value: 4.6
                            },
                            {
                                name: '(柯桥区) 金汇大厦 ',
                                value: 5.6
                            },
                            {
                                name: '（衢州市）吾悦华府',
                                value: 8.69
                            },
                            {
                                name: '柯桥银泰百货',
                                value: 9.06
                            },
                            
                        ],
                    }
                },
                init1 () {
                    this.name = "行业预警指数"
                    this.config = {
                        data: [
                            {
                                name: '医疗',
                                value: 1.6
                            },
                            {
                                name: '体育场馆',
                                value: 2.6
                            },
                            {
                                name: '教学',
                                value: 4.9
                            },
                            {
                                name: '剧院',
                                value: 5.6
                            },
                            {
                                name: '办公商务',
                                value: 6.6
                            },
                            {
                                name: '商业',
                                value: 7.69
                            },
                            {
                                name: '综合建筑',
                                value: 9.06
                            },
                            
                        ],
                    }
                }
            },
        }
    },
}
</script>

<style lang="scss">
    .tops{
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        .firefighting{
            flex: 1;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            overflow-y: auto;
            &::-webkit-scrollbar{
                width: 5px;
            }
            &::-webkit-scrollbar-thumb { 
                border-radius: 10px;
                box-shadow: inset 0 0 5px #232D36;
                background-color: rgba(10, 32, 50, 0.5);
            } 
        }
    }
</style>