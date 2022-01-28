const express = require('express')
const router = express.Router()
const axios = require('axios')
const javaSideAPI = axios.create({
    baseURL: 'https://c684-61-227-117-88.ngrok.io/productlist',
})

router.get('/test1', (req, res) => {
    res.send('Hello Nuxt!')
})

router.get('/test2', (req, res, next) => {
    res.json(['good job'])
    next()
})

router.get('/get/:category/:type', async (req, res, next) => {
    let result = await javaSideAPI.get(`/${req.params.category}/${req.params.type}`)
    console.log(result)
    res.json(result.data)
})

module.exports = router
