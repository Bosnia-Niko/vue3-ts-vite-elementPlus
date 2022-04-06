import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import menu from "../components/menu.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/index.vue'),
  },
  {path: '/', redirect: {name: 'Home'}},
  {
    path: '/demoFirst',
    name: 'demoFirst',
    component: () => import(/* webpackChunkName: "demoFirst" */ '@/views/demo1/index.vue')
  },
  {
    path: '/demoSecond',
    name: 'demoSecond',
    component: () => import(/* webpackChunkName: "demoSecond" */ '@/views/demo2/index.vue')
  },
  {
    path: '/demoThird',
    name: 'demoThird',
    component: () => import(/* webpackChunkName: "demoThird" */ '@/views/demo3/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router