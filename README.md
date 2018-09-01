# my-webpack-cli

[![Hackage](https://img.shields.io/badge/nodejs-8.11.4-blue.svg)](https://nodejs.org/en/) [![Hackage](https://img.shields.io/badge/webpack-4.16.5-blue.svg)](https://webpack.js.org/)

> webpack 脚手架基础版，包含以下内容

### 多页面入口文件
```
entry: {
    home: './app/home/home.js',
    about: './app/about/about.js',
    contact: './app/contact/contact.js'
}
```

### loader 配置
包含了基础的图片、字体、css、sass、postcss、babel 等 loader

### mode 模式配置

通过 `webpack-merge` 插件分离开发与生产环境配置，所以项目里包含:

- `webpack.common.js`：公共的配置文件
- `webpack.dev.js`：适用于开发环境的配置
- `webpack.prod.js`：适用于生产环境的配置

`package.json` 文件里面包含：`dev-server`、`dev`和`build`，使用`npm run`对应的脚本即可启动

```
"dev-server": "webpack-dev-server --open --colors --config webpack.dev.js",
"dev": "webpack --config webpack.dev.js --colors",
"build": "webpack --config webpack.prod.js --colors",
```

- `build`用于构建生产环境脚本
- `dev-server`使用`webpack-dev-server`来作为服务器，须注释掉`watch:true`，取消注释`devServer`部分 

    ```
     // watch: true,
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),  //指定public资源地址（非项目打包的资源，比如：字体、图片等资源）
        publicPath: '/dist/',   //指定服务器根目录（http://localhost:9000/dist）
        compress: true,
        port: 9000
    },
    
    ```
- `dev`使用`webpack's Watch Mode`来监听文件的改变

    ```
    watch: true,
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'public'),  //指定public资源地址（非项目打包的资源，比如：字体、图片等资源）
    //     publicPath: '/dist/',   //指定服务器根目录（http://localhost:9000/dist）
    //     compress: true,
    //     port: 9000
    // },
    
    ```

### 插件使用    

- `clean-webpack-plugin` 每次构建前清除 `dist`文件夹，所有环境都包括
- `mini-css-extract-plugin` 生产环境，提取样式到 css 文件
- `webpack-manifest-plugin` 生产环境，生成文件 hash 映射
    
### 其他注意事项

- 默认安装了`babel-polyfill`，为了兼容低版本浏览器，最好在入口文件中加上`import 'babel-polyfill'`

- 如果不使用默认的严格模式，请自行安装`babel-plugin-transform-remove-strict-mode` 插件
    ```
    npm i -D babel-plugin-transform-remove-strict-mode
    
    //webpack中配置：
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
                    plugins: ['transform-remove-strict-mode']
                }
        }
    }
    ```