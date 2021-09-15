// const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  productionSourceMap: !isProduction,

  lintOnSave: 'error',

  devServer: {
    open: true
  },

  //   configureWebpack: {
  //     resolve: {
  //       mainFields: ['browser', 'module', 'main'],
  //       alias: {
  //         '@': path.resolve(__dirname, 'src')
  //       }
  //     }

  //   }
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  }
}
