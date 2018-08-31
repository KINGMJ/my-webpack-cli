const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin'); //文件hash映射
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //提取css

module.exports = merge.smart(common, {
    mode: 'production',
    //输出配置
    output: {
        filename: 'js/[name].[hash].min.js',    //根据入口文件输出的对应多个文件名
        path: path.resolve(__dirname, 'dist'),  //文件输出目录
        chunkFilename: 'js/[chunkhash:12].chunk.min.js',
        publicPath: '/dist/' //用于配置文件发布路径，如CDN或本地服务器
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        //提取公共css文件
        new MiniCssExtractPlugin({
            filename: '[name].[hash].min.css',
            chunkFilename: '[id].[hash].min.css'
        }),
        //映射js文件与添加hash之后的文件
        new ManifestPlugin()
    ]
});



