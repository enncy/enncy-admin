
// 通用设置的状态模块

export  default {
    namespaced: true,
    state:()=>({
        //屏幕大小全局变量 -只在自适应布局AdaptLayout中获取
        screenWidth: undefined,

        //全局设置
        setting: {
            //主题颜色
            color: {
                //主色
                primaryColor: '#1890ff',
                //成功色
                successColor:'#52c41a',
                //警告色
                warningColor:'#faad14',
                //错误色
                errorColor:'#f5222d',

            },
            //菜单栏设置
            menu: {
                mode: 'inline',
                // 菜单栏颜色
                theme: 'dark'
            },
            //布局设置,默认side，侧边栏布局
            layout: 'side',
        }
    }),
    mutations: {
        setScreenWidth(state, screenWidth) {
            state.screenWidth = screenWidth;
        },
        setMenu(state, menu) {
            state.setting.menu = menu;
        },
        setLayout(state, layout) {
            state.setting.layout = layout;
        },
        setColor(state, color) {
            state.setting.color = color;
        },
    },
    actions: {
        //设置屏幕大小全局变量
        setScreenWidthAction(context, screenWidth) {
            context.commit('setScreenWidth', screenWidth);
        },
        setMenuAction(context, menu) {
            context.commit('setMenu', menu);
        },
        setLayoutAction(context, layout){
            if(!['side','navigation'].find(i=>i===layout)){
                throw 'menu layout dose not match the value "side" and "navigation" '
            }
            context.commit('setLayout', layout);
        },
        setColorAction(context, color) {
            context.commit('setColor', color);
        }
    },

}