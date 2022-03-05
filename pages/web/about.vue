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
                            <img style="width: 250px" :src="image"/>
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

export default {
    name: 'about',
    data () { 
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                slidesPerView: 5,
                spaceBetween: 20,
                observer: true,
                breakpoints: {
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    769: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }
            },
            aboutImages: [
                about1, about2, about3, about4, about5, about6, about7, about8, about9
            ]
        }
    }
}
</script>

<style lang="scss" scope>

.pt {
    padding-top: 50px;
}
.about-wrap {
    display: flex;
    flex-direction: column;
    background-color: rgb(95 , 89 , 68, .7);
    color: #fff;
    border-top: 10px double rgb(95 , 89 , 68,);
    border-bottom: 10px double rgb(95 , 89 , 68,);
    .about-title {
        margin: 30px auto 20px auto;
        font-size: 32px;
        font-weight: bold;
    }
    hr {
        width: 85%;
    }
    .about-context {
        margin: 30px auto 0 auto;
        width: 900px;
        font-size: 24px;
        line-height: 2.3;
        text-align: center;
        padding-bottom: 100px;
        p:nth-child(1) {
            font-size: 28px;
            line-height: 2.5;
        }
    }
}

.swiper-wrap {
    position: relative;
    margin: 20px auto 0 auto;
    padding-top: 20px;
    background-color: rgba(95, 89, 68, 0.4);
    .swiper-container {
        padding-bottom: 20px;
    }
    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: 4px;
    }
    .swiper-img {
        display: flex;
    }
}

</style>