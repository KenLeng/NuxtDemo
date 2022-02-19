import axios from 'axios'
const apiFactory  = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

export const test1 = () => apiFactory.get('/test1').then(res => res.data)
export const test2 = () => apiFactory.get('/test2').then(res => res.data)

export const getCategories = () => apiFactory.get().then(res => { return res.data })
export const restfulGet = (category, type) => apiFactory.get(`/${category}/${type}`).then(res => { return res.data} )
