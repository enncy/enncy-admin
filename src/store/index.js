import Vue from 'vue'
import Vuex from 'vuex'
import setting from '@/store/module/setting'
Vue.use(Vuex)

console.log(setting)

export default new Vuex.Store({
    modules:{
        setting,
    }
})