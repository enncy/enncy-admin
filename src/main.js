import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antdv from 'ant-design-vue'

// antdv 组件
import 'ant-design-vue/dist/antd.css';
//公共 css
import '@/assets/common.css'
//注册自定义指令
import './utils/directive/index'

Vue.config.productionTip = false
Vue.use(antdv)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
