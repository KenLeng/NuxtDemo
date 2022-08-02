import Vue from 'vue'
import VueAwesomeSwiper  from 'vue-awesome-swiper'
import Swiper, { Pagination, Autoplay } from 'swiper'
Swiper.use([Pagination, Autoplay])

export default () => {
    Vue.use(VueAwesomeSwiper)
}
