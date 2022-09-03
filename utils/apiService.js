import axios from 'axios'
const apiFactory  = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

export const restfulGet = (category, type) => apiFactory.get(`/${category}/${type}`)
                                                .then(res => {
                                                    return res.data
                                                })
