<template>
    <div class="content-wrap">
        <div class="content pt">
            <div class="about-wrap">
                <div class="about-title">真如意珠寶</div>
                <hr/>
                <div class="about-context">
                    <p>
                        <strong>『誠信、創新、服務』</strong><br>
                    </p>
                    <p>一直是我們承諾的三大保證，</p>
                    <p>服務項目包含產品設計、品牌代理、專業工藝技術服務等。</p>
                    <p>秉持以客為本的理念重點，</p>
                    <p>提供優良的服務和品質保證且專心致力業務發展以及創新理念的提升，</p>
                    <p>未來將繼續提升各方面服務項目來永續經營，</p>
                    <p>藉此來回饋顧客對我們的支持與信任。</p>
                </div>
            </div>
            <div class="swiper-wrap">
                <swiper class="swiper" :options="swiperOption" :breakpoints="swiperOption.breakpoints">
                    <swiper-slide v-for="(image, index) in aboutImages" :key="index">
                        <div class="swiper-img">
                            <img style="width: 100%" :src="image"/>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import about1 from '@/assets/images/about-1.jpg'
import about2 from '@/assets/images/about-2.jpg'
import about3 from '@/assets/images/about-3.jpg'
import about4 from '@/assets/images/about-4.jpg'
import about5 from '@/assets/images/about-5.jpg'
import about6 from '@/assets/images/about-6.jpg'
import about7 from '@/assets/images/about-7.jpg'
import about8 from '@/assets/images/about-8.jpg'
import about9 from '@/assets/images/about-9.jpg'

import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

export default {
    name: 'about',
    head () {
        return {
            title: '關於 | 真如意珠寶店',
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og-title',
                    name: 'og:title',
                    content: '關於 | 真如意珠寶店'
                }
            ]
        }
    },
    data () {
        return {
            swiperOption: {
                autoplay: {
                    disableOnInteraction: false,
                    delay: 1500,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                        spaceBetween: 20
                    },
                    720: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                        spaceBetween: 10
                    },
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10
                    }
                }
            },
            aboutImages: [
                about1, about2, about3, about4, about5, about6, about7, about8, about9
            ]
        }
    },

    created() {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'vertical',
            loop: true,
        });
    }
}
</script>

<style lang="scss" scope>

.pt {
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
}

</style>