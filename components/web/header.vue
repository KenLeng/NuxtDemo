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
                    <div class="content-list" v-for="(category, index) in categories"
                        :key="index">
                        <span>{{ category.name }}</span>
                        <div class="dropdown-item">
                            <div class="item-list" v-for="(data, index) in category.sencondCategories"
                                :key="index"
                                @click="redirectProduct(types.category, data.category)">
                                <span>{{ data.name }}</span>
                            </div>
                        </div>
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
import { getCategories } from '@/utils/apiService.js' 
export default {
    name: 'header',
    data() {
        return {
            categories: [
                {
                    name: '黃金',
                    category: 'golden',
                    sencondCategories: [
                        { name: '黃金戒指（女）', category: 'wring'},
                        { name: '黃金戒指（男）', category: 'mring'},
                        { name: '黃金對戒', category: 'couplering'},
                        { name: '黃金手鍊（環）', category: 'bracelet'}
                    ]
                }, 
                { 
                    name: '白金',
                    category: 'platinum',
                    sencondCategories: [
                        { name: '白金戒指', category: 'test' }
                    ]
                },
                {
                    name: '鑽石',
                    category: 'diamond',
                    sencondCategories: []
                },
                 {
                    name: '對戒',
                    category: 'couple',
                    sencondCategories: []
                }
            ],
            condition: {}
        }
    },
    async mounted() {
        // this.categories = await getCategories()
    },

    methods: {
        redirectProduct(category, type) {
            let condition = JSON.stringify({ category, type })
            document.cookie = `_condition=${condition}`
            this.$router.push({
                path: '/web/products'
            })
        }
    }
}
</script>
