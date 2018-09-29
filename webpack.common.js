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
                {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
                {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
                {
                    test: /\.m?js$/,
                    exclude:
                        /(node_modules|bower_components)/,
                    use:
                        {
                            loader: 'babel-loader',
                            options:
                                {
                                    presets: ['env'],
                                    plugins:
                                        ['transform-runtime', 'transform-remove-strict-mode', 'transform-object-rest-spread']
                                }
                        }
                }
            ]
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './app')
            }
        },
        plugins: [
            //清空dist文件夹
            new CleanWebpackPlugin(['dist'])
        ],
    }
;

module.exports = config;