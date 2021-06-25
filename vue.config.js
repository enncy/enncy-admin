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

    runtimeCompiler: true
};
