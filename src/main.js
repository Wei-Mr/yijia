import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'amfe-flexible/index.js'

//导入操作cookies模块
import VueCookies from 'vue-cookies'

Vue.use(VueAxios, axios)

Vue.use(Vant)

Vue.use(VueCookies)

Vue.config.productionTip = false

//设置基础请求路径
// axios.defaults.baseURL = 'https://api.jisuapi.com/recipe'
axios.defaults.baseURL = '/api'

//配置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

//为vue原型添加一个属性
Vue.prototype.appkey = '69b78bdba947e3a8'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
