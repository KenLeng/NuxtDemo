<template>
    <div class="content-wrap">
        <div class="content">
            <div class="detail-wrap">
                <div class="product-map">黃金 > 戒指 > 黃金戒指（男）</div>
                <div style="display: flex; justify-content: space-evenly;">
                    <div ref="oriImg"
                        :style="'background-image:url('+ demo1 +')'"
                        style="width: 400px; height: 400px; background-repeat: no-repeat; background-size: cover; position: relative">
                        <div ref="magnifier" class="search"></div>
                    </div>
                    <div class="intro">
                        <div class="bottom-line">黃金戒指（男）</div>
                        <div class="bottom-line">重量 : 100g</div>
                        <div class="bottom-line">介紹介紹介紹介紹介紹介紹</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import demo1 from '@/assets/images/demo1.png'

export default {
    name: 'detail',
    data() {
        return {
            imgBox: null,
            oriImg: null,
            magnifier: null,
            zoomImg: null,
            demo1: demo1
        }
    },
    created() {
    },
    mounted() {
    },

    methods: {
    }
}
</script>