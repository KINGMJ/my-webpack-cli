const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
        //多页面应用入口配置
        entry: {
            home: './app/home/home.js',
            about: './app/about/about.js',
            contact: './app/contact/contact.js'
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
                }
            ]
        },
        plugins: [
            //清空dist文件夹
            new CleanWebpackPlugin(['dist']),
            new webpack.optimize.SplitChunksPlugin({
                chunks(chunk) {
                    console.log(chunk);
                }
            })
        ],
    }
;

module.exports = config;