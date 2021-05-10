const path = require('path');
const {generateTheme} = require('antd-theme-generator');
// ant-design-vue/dist/antd.less
const options = {
    antDir: path.join(__dirname, './node_modules/ant-design-vue'), //对应具体位置
    stylesDir: path.join(__dirname, './src/assets/theme'),    //对应具体位置
    varFile: path.join(__dirname, './src/assets/theme/variables.less'), //对应具体位置
    themeVariables: [
        '@primary-color',
    ],
    indexFileName: './public/index.html',
    outputFilePath: path.join(__dirname, './public/color.less'),
}
generateTheme(options)
    .then(() => {
    console.log('Theme generated successfully');
    })
    .catch(error => {
        console.log('Error', error);
    });
