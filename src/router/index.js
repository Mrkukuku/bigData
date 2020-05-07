import Vue from 'vue'
import Router from 'vue-router'
// import dataV from "@/components/dataV.vue"
// import mapdata from "@/components/mapdata.vue"
// import datacharts from "@/components/.vue"
// import player from "@/components/player.vue"
import menu from '@/components/menu.vue'

Vue.use(Router)

export const constantRoutes =[
  {
    path: '/',
    redirect:'/login',
    hidden:true,
  },
  {
    path:"/menu",
    component: () => import('@/components/menu.vue'),
    name:"menu",
    hidden:true,
  },
  {
      path: '/mapdata',
      component: () => import('@/components/mapdata.vue'),
      name:"mapdata",
  },
  {
      path: '/login',
      name:"login",
      component: () => import('@/components/login.vue'),
  },
  {
    path:'/bigdata',
    name:"bigdata",
    component: () => import('@/components/bigData.vue'),
  },
  {
    path:'/alarmdata',
    name:"alarmdata",
    component: () => import('@/components/alarmData.vue'),
  },
  {
    path:'/sic',
    name:"视频测试",
    component: () => import('@/components/alarmAnalysis/sicTest.vue')
  },
  {
    path:'/locus',
    name:"轨迹回放",
    component: () => import('@/components/locus.vue')
  },
  {
      path: '/404',
      component: () => import('@/components/errorPage'),
      hidden: true
  },
 
]

export const asyncRoutes = [
    {
      path:"/datacharts",
      name:"datachart",
      component:menu,
      redirect:"/datacharts/index",
      children:[
        {
          path:"index",
          component: () => import('@/components/datacharts.vue'),
          meta:{
            title:"图表",
            roles: ['admin']
          }
        }
      ]
    },
    {
      path:"/player",
      name:"play",
      component: menu,
      redirect:"/player/index",
      children:[
        {
          path:"index",
          component: () => import('@/components/player.vue'),
          meta:{
            title:"视频监控",
            roles:["edit"]
          },
        },
        {
          path:"demo",
          component: () => import('@/components/demo.vue'),
          meta:{
            title:"G2",
            roles:["edit"]
          },
        }
      ],
     
    },
    { path: '*', redirect: '/404', hidden: true }
]


export default new Router({
  routes: constantRoutes
})
