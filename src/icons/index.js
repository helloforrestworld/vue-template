// 图标自动导入
const webpackContext = require.context('./svg', false, /\.svg$/)

webpackContext.keys().map(webpackContext)
