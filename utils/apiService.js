import axios from 'axios'
const apiFactory  = axios.create({
    baseURL: 'http://zhenruyijewelry.com/api/'
})

export const restfulGet = (category, type) => apiFactory.get(`/${category}/${type}`)
                                                .then(res => {
                                                    return res.data
                                                })
