import axios from 'axios'
const apiFactory  = axios.create({
    baseURL: 'http://www.zhenruyijewelry.com/api/'
    // baseURL: 'http://localhost/api/'
})

export const restfulGet = (category, type) => apiFactory.get(`/${category}/${type}`)
                                                .then(res => {
                                                    return res.data
                                                })
