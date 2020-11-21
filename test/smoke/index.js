const path = require('path')
const webpack = require('webpack')
// 删除目录库
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
    timeout: '10000ms'
})

// 设置当前的node进程位置
process.chdir(path.join(__dirname, 'template'))

rimraf('./dist', () => {
    const prodConfig = require('../../lib/webpack.prod')
    console.log(prodConfig)

    webpack(prodConfig, (err, status) => {
         if(err) {
             console.log(err)
             process.exit(2)
         }
         console.log(status.toString({
             colors: true,
             modules: false,
             children: false
         }))

         console.log('Webpack build success, begin run test')

         mocha.addFile(path.join(__dirname, 'html-test.js'))
         mocha.addFile(path.join(__dirname, 'css-js-test.js'))
         mocha.run()
    })
})