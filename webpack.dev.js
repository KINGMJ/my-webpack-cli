const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    // watch: true,
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),  //指定public资源地址（非项目打包的资源，比如：字体、图片等资源）
        publicPath: '/dist/',   //指定服务器根目录（http://localhost:9000/dist）
        compress: true,
        port: 9000
    },
    //输出配置
    output: {
        filename: 'js/[name].js',    //根据入口文件输出的对应多个文件名
        path: path.resolve(__dirname, 'dist'),  //文件输出目录
        chunkFilename: 'js/[chunkhash:12].chunk.min.js',
        publicPath: 'http://localhost:9000'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}},
                    {loader: 'postcss-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}}, // 将CSS转化成 CommonJS 模块
                    {loader: 'postcss-loader'}, // 预处理器，可配置浏览器兼容写法等属性
                    {loader: "sass-loader", options: {sourceMap: true}} // 将 Sass 编译成 CSS
                ]
            }
        ]
    }
});