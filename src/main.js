/*
 * @Description: main文件，添加公共配置
 * @Date: 2020-03-13 23:09:53
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-15 15:49:08
 */
import Vue from 'vue'
import i18n from './lang/index'

import 'normalize.css'
import 'view-design/dist/styles/iview.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')