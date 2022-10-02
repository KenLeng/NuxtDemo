import { imgConfig }  from '../config'

export const state = () => ({
    imgConfig: {}
})

export const mutations = {
    setImgConfig(state, payload) {
        state.imgConfig = payload
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        commit('setImgConfig', { ...imgConfig })
    }
}