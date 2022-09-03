import axios from 'axios'
const apiFactory  = axios.create({
    baseURL: 'http://20.196.152.101:3000/api/'
})

export const restfulGet = (category, type) => apiFactory.get(`/${category}/${type}`)
                                                .then(res => {
                                                    return res.data
                                                })
