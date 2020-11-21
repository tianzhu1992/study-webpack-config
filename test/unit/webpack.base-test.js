const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    it('entry', () => {
        assert(baseConfig.entry.index.includes('test/smoke/template/src/index/index.js'))
        assert(baseConfig.entry.index.includes('test/smoke/template/src/index/index.js'))
    })
})