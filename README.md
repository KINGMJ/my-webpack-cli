# my-webpack-cli （webpack 脚手架）

## 开发模式与生产模式

### 开发模式

https://webpack.js.org/guides/development/#choosing-a-development-tool

开发模式可以用三种工具来监听文件改变： 

- webpack's Watch Mode
- webpack-dev-server
- webpack-dev-middleware 

使用 `webpack's watch mode` ，`watch`设置为true，`devtool` 选择一种sorcemap模式,
`package.json`里的命令`"dev": "webpack --config webpack.dev.js",`

```
module.exports = merge(common, {
    mode: 'development',
    watch:true,
    devtool: 'inline-source-map',
});
```


