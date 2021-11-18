const express = require('express')
const router = express.Router()

router.get('/test1', (req, res) => {
    res.send('Hello Nuxt!')
})

router.get('/test2', (req, res, next) => {
    res.json(['good job'])
    next()
})

module.exports = router
