const app = require('express')()
const bodyParser = require('body-parser')
// const webSocket = require('./webSocketUtil.js')
const router = require('./routers/index')

// webSocket.init()
app.use(router)

// express 相關
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Listen the server
app.listen(process.env.NUXT_SERVER_PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.NUXT_SERVER_PORT}`)
})


// Export the server middleware
module.exports.app = app
// concept is like servlet
module.exports = {
    path: '/api',
    handler: app
}