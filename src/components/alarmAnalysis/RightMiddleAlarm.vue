<template>
    <div class="alarm_list">
         <div class="title">今日报警列表</div>
        <div class="content">
            <div class="list" v-for="(item, index) in 7" :key="index"> 
                <span>10:{{50+index}}</span> 
                <div class="fire"> <span class="dot"></span> 火警 </div> 
                <span class="modify">完成</span> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .alarm_list{
        height: 100%;
        width: 100%;
         display: flex;
            flex-direction: column;
            overflow: hidden;
            .title{
                font-size: 18px;
            }
            .content{
                flex: 1;
                width: 100%;
                overflow-y: auto;
                &::-webkit-scrollbar{
                    width: 5px;
                }
                &::-webkit-scrollbar-thumb { 
                    border-radius: 10px;
                    box-shadow: inset 0 0 5px #232D36;
                    background-color: rgba(7, 44, 77, 0.8);
                }
                .list{
                   height: 35px;
                   display: flex;
                   align-items: center;
                   justify-content: space-around;
                   background-color: rgba(2, 41, 70, 0.8);
                   border-radius: 20px;
                   margin-top: 5px;
                   cursor: pointer;
                    &:hover{
                        transform: translate3d(0,-2px,0);
                    }
                    .modify{
                        color: rgba(28,196,74,1)
                    }
                    .dot{
                        height: 15px;
                        width: 15px;
                        border-radius: 50%;
                        background-color: rgba(5,61,74,1);
                        margin-right: 10px;
                        margin-top: 2px;
                    }
                    .fire{
                        display: flex;
                        width: 30%;
                    }
                } 
            }
    }
</style>