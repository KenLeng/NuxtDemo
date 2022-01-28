<template>
    <div class="content">
        <div>
            商品款式
            <div class="list-area">
                <div v-for="(data, index) in displayProducts" :key="index" class="p-item">
                    <img :src="data.img" alt="test" width="300"/>
                    <div>{{ data.name }}</div>
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
            category: 'all',
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
            displayProducts: []
        }
    },

    mounted() {
        console.log('products mounted...')
        this.getProducts()
        this.displayProducts = this.products['golden']
    },

    methods: {
        async getProducts(cond) {
            console.log(cond)
            // this.products = await restfulGet(cond.category, cond.type)
        }
    }
}
</script>