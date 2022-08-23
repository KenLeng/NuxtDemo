<template>
    <div class="content-wrap">
        <div class="content">
            <div class="product-wrap">
                <div class="product-map">{{ category  }} > {{ type }}</div>
                <div class="list-area">
                    <div v-for="(data, index) in displayProducts" 
                        :key="index" 
                        class="dib"
                        @click="toDetail(data.detail)"
                    >
                        <div class="p-item">
                            <div class="item-border">
                                <div class="item-box">
                                    <div class="item-img" :style="'background-image:url(/'+ data.imgName +'.jpg)'"></div>
                                    <div class="item-words">{{ data.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import demo1 from '@/assets/images/demo1.png'
import { restfulGet } from '@/utils/apiService.js'

export default {
    name: 'products',
    head () {
        return {
            title: '商品款式 | 真如意珠寶店',
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og-title',
                    name: 'og:title',
                    content: '商品款式 | 真如意珠寶店'
                }
            ]
        }
    },
    data() {
        return {
            products: {
                'golden': [
                    {
                        img: demo1,
                        name: '黃金戒指（女）'
                    },
                    {
                        img: demo1,
                        name: '黃金戒指（男）'
                    },
                    {
                        img: demo1,
                        name: '黃金對戒'
                    },
                    {
                        img: demo1,
                        name: '黃金手鍊（環）'
                    },
                    {
                        img: demo1,
                        name: '黃金串珠、編繩'
                    },
                    {
                        img: demo1,
                        name: '黃金項鍊（女）'
                    },
                    {
                        img: demo1,
                        name: '黃金項鍊（男）'
                    }
                ]
            },
            displayProducts: [],
            category: '',
            type: ''
        }
    },

    async fetch() {
        await this.getProducts(this.$route.params)
    },

    methods: {
        async getProducts(cond) {
            const result = await restfulGet(cond.category, cond.type)
            this.category = result.category
            this.type = result.type
            this.displayProducts = result.productList
        },

        toDetail(detailInfo) {
            this.$router.push({
                name: 'category-type-detail',
                params: { detailInfo }
            })
            // this.$router.push({
            //     path: `/${this.$route.params.category}/${this.$route.params.type}/detail/`
            // })
        }
    }
}
</script>