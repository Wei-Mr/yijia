import Vue from 'vue'
import Vuex from 'vuex'

import {
  categoryModule
} from './category/store'

import {
  goodsModule
} from './goods/store'

import {
  detailModule
} from './detail/store'

import {
  registerModule
} from './register/store'

import {
  loginModule
} from './login/store'

import {
  myModule
} from './my/store'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //菜单页面是否已经加载过
    menuIsLoaded: false,

    //记录是否登录
    isLogin: false
  },
  mutations: {
    changeData(state, data) {
      state[data.key] = data.value;
    }
  },
  actions: {},
  modules: {
    categoryModule,
    goodsModule,
    detailModule,
    registerModule,
    loginModule,
    myModule
  }
})
