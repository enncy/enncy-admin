// vue.config.js

const path = require('path');

module.exports = {

    //项目别名配置
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            }
        }
    },
    // less 配置
    // css: {
    //     loaderOptions: {
    //         less: {
    //             lessOptions: {
    //                 // If you are using less-loader@5 please spread the lessOptions to options directly
    //                 javascriptEnabled: true,
    //             },
    //         },
    //     },
    // },

    runtimeCompiler: true
};
