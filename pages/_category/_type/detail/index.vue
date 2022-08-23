<template>
    <div class="content-wrap">
        <div class="content">
            <div class="detail-wrap">
                <div class="product-map">黃金 > 戒指 > 黃金戒指（男）</div>
                <div style="display: flex; justify-content: space-evenly;">
                    <div ref="oriImg"
                        :style="'background-image:url('+ demo1 +')'"
                        style="width: 400px; height: 400px; background-repeat: no-repeat; background-size: cover; position: relative">
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
            oriImg: null,
            magnifier: null,
            demo1: demo1
        }
    },
    created() {
        this.nav = this.$route.params
        console.log(this.$route.params)
    },
    // async fetch() {
    //     this.displayProducts = await restfulGet(this.$route.params.category, this.$route.params.type)
    // },

    methods: {
    }
}
</script>