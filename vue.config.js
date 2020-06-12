/*
 * @Author: your name
 * @Date: 2020-06-11 10:07:32
 * @LastEditTime: 2020-06-11 10:32:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue模板\test\vue.config.js
 */ 
// const fs = require('fs')
module.exports = {
    chainWebpack: config => {
      const oneOfsMap = config.module.rule('scss').oneOfs.store
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            // Provide path to the file with resources
            resources: './src/common/index.scss',
  
            // Or array of paths
            // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
          })
          .end()
      })
    }
  }