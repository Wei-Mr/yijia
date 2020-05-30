import Vue from 'vue'
import Vuex from 'vuex'

import {categoryModule} from './category/store'

import {goodsModule} from './goods/store'

import {detailModule} from './detail/store'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vanTabbar:true, 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categoryModule,
    goodsModule,
    detailModule
  }
})
