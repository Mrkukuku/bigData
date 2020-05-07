<template>
    <div class="wrapper">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu  v-for="(item, index) in permission_routes" :key="index" :index="index+''" v-if="!item.hidden">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title"><router-link :to="!item.children && item.path ||''">{{item.name && item.name}}</router-link></span>
                        </template>
                        <el-menu-item-group v-for="(items, index) in item.children" :key="index">
                            <el-menu-item index="1-1"><router-link :to="item.path+'/'+items.path">{{items.meta && items.meta.title}}</router-link></el-menu-item>
                        </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <div class="wrapper_right">
                <div class="head">
                    <el-radio-group v-model="isCollapse">
                        <el-radio-button :label="false" v-show="isCollapse">展开</el-radio-button>
                        <el-radio-button :label="true" v-show="!isCollapse">收起</el-radio-button>
                    </el-radio-group>
                </div>
               <transition name="fade-transform" mode="out-in">
                    <router-view/>
                </transition>
            </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        
    },
   computed: {
    ...mapGetters([
      'permission_routes'
    ]),
   },
   mounted() {
    //    console.log(this.permission_routes)
   },
}
</script>

<style lang="scss">
    .wrapper{
        background-color: #282c34;
        height: 100%;
        width: 100%;
        display: flex;
        overflow: hidden;
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
        .wrapper_right{
            flex: 1;
            height: 100%;
        }
    }
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .5s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
</style>