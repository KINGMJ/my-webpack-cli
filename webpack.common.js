const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
        //多页面应用入口配置
        entry: {
            demo1: './app/demo1/demo1.js',
            demo2: './app/demo2/demo2.js'
        },
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'dist/'
                        }
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.js$/,
                    exclude:
                        /(node_modules|bower_components)/,
                    use:
                        {
                            loader: 'babel-loader',
                            options:
                                {
                                    presets: ['env'],
                                    plugins:
                                        ['transform-runtime']
                                }
                        }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                }
            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        plugins: [
            new VueLoaderPlugin(),
            //清空dist文件夹
            new CleanWebpackPlugin(['dist'])
        ],
    }
;
module.exports = config;