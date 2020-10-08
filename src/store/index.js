import Vue from 'vue'
import Vuex from 'vuex'

import getters from "./getters";
import mutations from "./mutations";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations,
  actions: {
    addCart(context,payload) {
      // 判断数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('AddCounter',oldProduct)

      }else {
        payload.count = 1
        context.commit('AddToCart',payload)
      }
    }
  },
  getters,
  modules: {
  }
})

