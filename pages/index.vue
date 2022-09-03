<template>
    <div class="content-wrap">
        <div class="content pt">
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
            
            <div class="about-wrap">
                <div class="about-title">
                    <span class="title-word">真</span>
                    <span class="title-word">如</span>
                    <span class="title-word">意</span>
                    <span class="title-word">珠</span>
                    <span class="title-word">寶</span>
                    <span class="title-word">銀</span>
                    <span class="title-word">樓</span>
                </div>
                <hr/>
                <div class="about-context lineUp">
                    <p>真如意珠寶銀樓Zhenruyi Jewelry 位於台南市歸仁區，擁有多種款式</p>
                    <p>我們提供黃金飾品、鉑金飾品、K金飾品、GIA認證鑽石、求婚鑽戒、結婚對戒、</p>
                    <p>翡翠玉品、天然珍珠飾品、珠寶設計客製化服務…等等。</p>
                    <p>『誠信、創新、服務』一直是我們承諾的三大保證</p>
                    <p>秉持以客為本的理念重點</p>
                    <p>提供優良的服務和品質保證且未來將繼續提升各方面服務項目來永續經營</p>
                    <p>藉此來回饋顧客對我們的支持與信任。</p>
                </div>
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
            title: '關於 | 真如意珠寶銀樓',
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og-title',
                    name: 'og:title',
                    content: '關於 | 真如意珠寶銀樓'
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
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
}

</style>