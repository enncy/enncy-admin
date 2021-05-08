import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决重复路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 引入
Vue.use(VueRouter)
// 路由配置
const routes = [
    {
        path: '/',
        component: ()=>import('@/views/index/index.vue')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})
