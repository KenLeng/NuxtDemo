<template>
    <div class="web-header">
        <div class="header-content">
            <div class="banner"></div>
            <div class="logo"></div>
        </div>
        <nav class="web-nav">
            <a class="nav-item" href="javascript:void(0)" @click="$router.push('/web/about')">
                關於
                <i class="far fa-info-circle"></i>
            </a>
            <div class="nav-item dropdown">
                商品款式<i class="fas fa-rings-wedding"></i>
                <div class="dropdown-content">
                    <div v-for="(data, index) in categories"
                        :key="index"
                        @click="redirectProduct(data.category)">
                        <span>{{ data.name }}</span>
                    </div>
                </div>
            </div>
            <a class="nav-item" href="javascript:void(0)" @click="$router.push('/web/info')">
                店鋪資訊
                <i class="fas fa-map-marker-alt"></i>
            </a>
            <a class="nav-item" href="javascript:void(0)" @click="$router.push('/web/problem')">
                常見問題
                <i class="far fa-question-circle"></i>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
            categories: [
                {
                    name: '項鍊',
                    category: 'necklace',
                }, 
                { 
                    name: '戒指',
                    category: 'ring'
                },
                {
                    name: '黃金',
                    category: 'gold'
                }
            ]
        }
    },
    methods: {
        redirectProduct(category) {
            console.log('category', category)
            this.$router.push({
                name: 'web-products',
                params: category
            })
        }
    }
}
</script>
