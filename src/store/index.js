/**
 * Created by Administrator on 2017/3/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    pagesize: 10,//分页条数
    lognameobj:{}
  },
  mutations: {
    setpagesize(state, obj) {
      state.pagesize = obj
    },
    setlognameobj(state, obj) {
      state.lognameobj = obj
    }
    //  this.$store.commit('setpagesize', val)
  }
})
