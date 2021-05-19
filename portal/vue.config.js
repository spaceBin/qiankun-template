'use strict'
const path = require('path')

const port = 7013

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

module.exports = {
  productionSourceMap: isProduction,

  lintOnSave: true, // 如果为false，就是取消eslint规则的检查
  devServer: {
    port,
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //   // change xxx-api/login => mock/login
    //   // detail: https://cli.vuejs.org/config/#devserver-proxy
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: '', // 服务端地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
  },
  configureWebpack: {
    devtool: false,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['thread-loader']
        }
      ]
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
