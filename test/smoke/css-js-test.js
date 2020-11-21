const glob = require('glob-all')

describe('Checking generated html files', () => {
    it('should generate html files', (done) => {
        const files = glob.sync([
            './dist/css/index_*.css',
            './dist/css/search_*.css',
            './dist/js/index*.js',
            './dist/js/search*.js',
        ])

        if(files.length > 0) {
            done()
        } else {
            throw new Error('no css js files generate')
        }
    })
})