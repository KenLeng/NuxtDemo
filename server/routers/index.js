const express = require('express')
const router = express.Router()
require('dotenv').config()
const axios = require('axios')
const javaSideAPI = axios.create({
    baseURL: `${process.env.JAVA_API}productlist`,
})

router.get('/:category/:type', async (req, res, next) => {
    let result = await javaSideAPI.get(`/${req.params.category}/${req.params.type}`)
    res.json(result.data)
})

router.get('/test1', (req, res) => {
    res.send('Hello Nuxt!')
})

router.get('/test2', (req, res, next) => {
    res.json(['good job'])
    next()
})

module.exports = router
