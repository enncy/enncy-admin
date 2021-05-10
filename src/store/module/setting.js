
// 通用设置的状态模块

export  default {
    namespaced: true,
    state:()=>({
        //屏幕大小全局变量 -只在自适应布局AdaptLayout中获取
        screenWidth: undefined,

        //全局设置
        setting:{
            //主题颜色
            primaryColor:'#1890ff',
            //菜单栏设置
            menu:{
                layout:'',
                mode:'inline',
                theme: 'dark'
            },
        }
    }),
    mutations: {
        setScreenWidth(state, screenWidth) {
            state.screenWidth = screenWidth;
        },
        setMenu(state, menu) {
            state.menu = menu;
        },
    },
    actions: {
        //设置屏幕大小全局变量
        setScreenWidthAction(context, screenWidth) {
            context.commit('setScreenWidth', screenWidth);
        },
        setMenuAction(context, menu) {
            if(!['side','navigation'].find(i=>i===menu?.layout)){
                throw 'menu layout dose not match the value "side" and "navigation" '
            }
            context.commit('setMenu', menu);
        },
    },

}