<template>
    <div class="content-wrap">
        <div class="content">
            <div class="product-wrap">
                <div class="product-map">{{ category  }} > {{ type }}</div>
                <div class="list-area">
                    <div v-for="(data, index) in displayProducts" 
                        :key="index" 
                        class="dib"
                        @click="toDetail(data)"
                    >
                        <div class="p-item">
                            <div class="item-border">
                                <div class="item-box">
                                    <img class="item-img" :src="getAssetsImage(data.productList.imgName)" :alt="data.typeName" />
                                    <!-- <div class="item-words">{{ data.name }}</div> -->
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
import { Base64 } from 'js-base64';
import { restfulGet } from '@/utils/apiService.js'

export default {
    name: 'products',
    head () {
        return {
            title: '商品款式 | 真如意珠寶銀樓',
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og-title',
                    name: 'og:title',
                    content: '商品款式 | 真如意珠寶銀樓'
                }
            ]
        }
    },
    data() {
        return {
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
            this.category = result[0].category
            this.type = result[0].typeName
            this.displayProducts = result
        },

        getAssetsImage(name) {
            try {
                return `${this.$store.state.imgConfig.img_url}/${name}.jpg?${this.$store.state.imgConfig.img_expiration}`
            } catch(error) {
                console.error(error)
            }
        },

        toDetail(detailInfo) {
            this.$router.push({
                path: `/${this.$route.params.category}/${this.$route.params.type}/detail?product=${Base64.encode(JSON.stringify(detailInfo), true)}`
            })
        }
    }
}
</script>