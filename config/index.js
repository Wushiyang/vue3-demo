'use strict'
const path = require('path')
module.exports = {
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'static'
  },
  dev: {
    // assetsRoot: '',
    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    host: 'www.0779365.me',
    port: 8080,
    proxyTable: {
      // '/api': {
      //   target:
      //     'http://doclever.tech-oa.beihai365.com:8080/mock/5c6d0d5402fead0001f17276/',
      //   // target: 'http://develop.api.maifangbang.dev.taobeihai.com/',
      //   secure: false,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/'
      //   }
      // }
    },
    poll: true, // 轮询监控文件系统
    autoOpenBrowser: true,
    errorOverlay: true, // 错误显示
    useEslint: false,
    cssSourceMap: true,
    devtool: 'eval-cheap-module-source-map'
  }
}
