/*
 * @Description: 路由文件
 * @Date: 2020-03-13 23:09:53
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-24 14:47:29
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/PC/Index.vue'
import IndexWap from '@/views/Wap/Index.vue'

Vue.use(VueRouter)

const routesPC = [
{
  path: '/',
  name: 'Index',
  component: Index
},
]

const routesWap = [{
  path: '/',
  name: 'IndexWap',
  component: IndexWap
}]

// 判断移动端还是pc端
const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
let routes = routesPC;
if (flag) {
  routes = routesWap;
  // console.log('移动端');
} else {
  routes = routesPC;
  // console.log('pc端');
}

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router