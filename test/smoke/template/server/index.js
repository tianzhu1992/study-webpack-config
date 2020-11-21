if(typeof window === undefined) {
    global.window = {}
}

const path = require('path')
const fs = require('fs')
const express = require('express')
const {renderToString} = require('react-dom/server')

const SSR = require('../dist/js/search-server.js')

const template = fs.readFileSync(path.resolve(__dirname, '../dist/search.html'), 'utf-8')

const server = (port) => {
    const app = express()

    app.use(express.static('../dist'))

    app.get('/search', (req, res) => {
        res.status(200).send(
            renderMarkUp(renderToString(SSR))
        )
    })

    app.listen(port, () => {
        console.log(`server is listening on ${port}`)
    })
}

const renderMarkUp = (str) => {
    return template.replace('<!--HTML_PLACEHOLDER-->', str)
} 


server(process.env.PORT || 3000)
