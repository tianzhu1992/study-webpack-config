const path = require('path')

process.chdir(path.join(__dirname, 'smoke/template'))

describe('build-webpack test base', () => {
    require('./unit/webpack.base-test.js')
})