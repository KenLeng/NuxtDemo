<template>
    <div class="content-wrap">
        <div class="content">
            <div class="product-wrap">
                <div class="product-map">{{ nav.category  }} > {{ nav.type }}</div>
                <div class="list-area">
                    <div v-for="(data, index) in displayProducts" 
                        :key="index" 
                        class="p-item"
                        @click="toDetail(data)"
                    >
                        <img :src="data.img" alt="image"/>
                        <div>{{ data.name }}</div>
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
            nav: {}
        }
    },

    mounted() {
        this.nav = this.$route.params
        // this.getProducts(this.nav)
        // 這是寫死的
        this.displayProducts = this.products['golden']
    },

    methods: {
        async getProducts(cond) {
            // this.products = await restfulGet(cond.category, cond.type)
        },

        toDetail() {
            this.$router.push({
                path: `/web/${this.nav.category}/${this.nav.type}/detail/`
            })
        }
    }
}
</script>