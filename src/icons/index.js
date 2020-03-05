// 图标自动导入
const webpackContext = require.context('./svg', false, /\.svg$/)

console.log(webpackContext)
console.log(webpackContext.keys())

webpackContext.keys().map(webpackContext)
