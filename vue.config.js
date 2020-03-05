const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    port: 3000
  },
  configureWebpack: {
    name: '集成一些vue最佳实践'
  },
  chainWebpack (config) {
    // 内置file-loader处理svg，需要排除一下。
    config.module.rule('svg')
      .exclude.add(resolve('./src/icons'))

    // 添加svg-sprite-loader
    config.module.rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('./src/icons'))
      .end() // add进入了include数组需要回退
      .use('svg-sprite-loader') // 添加svg-sprite-loader
      .loader('svg-sprite-loader') // 切换上下文到svg-sprite-loader
      .options({ symbolId: 'icon-[name]' }) // 配置svg-sprite-loader
  }
}
