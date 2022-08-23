require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')
const javaSideAPI = axios.create({
    baseURL: `${process.env.JAVA_API}productlist`,
})

router.get('/:category/:type', async (req, res, next) => {
    let result = await javaSideAPI.get(`/${req.params.category}/${req.params.type}`)
    res.json(result.data)
    next()
})

module.exports = router
