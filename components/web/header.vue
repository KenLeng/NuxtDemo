<template>
    <div class="web-header">
        <div class="header-content">
            <div class="banner"></div>
            <div class="logo" @click="$router.push('/')"></div>
        </div>
        <nav class="web-nav">
            <div class="nav-list">
                <div class="nav-wrap">
                    <a class="nav-item" href="javascript:void(0)" @click="$router.push('/web/about')">
                        <div>
                            <i class="far fa-info-circle"></i>
                        關於
                        </div>
                    </a>
                </div>
                <div class="nav-wrap">
                    <div class="nav-item dropdown">
                        <div>
                            <i class="fas fa-rings-wedding"></i>
                            商品款式
                        </div>
                        <ul class="dropdown-content">
                            <li class="content-list" v-for="(category, index) in categories" :key="index">
                                <ul class="dropdown-item">
                                    <li class="item-list" v-for="(secondCat, index) in category.secondCategories" :key="index"
                                        @click="redirectProduct(category.category, secondCat.category)">
                                        {{ secondCat.name }}
                                    </li>
                                </ul>
                                {{ category.name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-wrap">
                    <a class="nav-item" href="javascript:void(0)" @click="$router.push('/web/info')">
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            店鋪資訊
                        </div>
                    </a>
                </div>
                <div class="nav-wrap">
                    <a class="nav-item" href="javascript:void(0)" @click="$router.push('/web/problem')">
                        <div>
                            <i class="far fa-question-circle"></i>
                            常見問題
                        </div>
                    </a>
                </div>
            </div>
            
            <!-- 手機版  -->
            <div class="nav-bar" @click="showMenu = !showMenu">
                <i class="far fa-bars"></i>
            </div>
            <div v-show="showMenu">
                <ul class="dropdown-content-mobile">
                    <li class="nav-item-mobile">
                        <div @click="directPush('about')">
                            <div>關於</div>
                        </div>
                    </li>
                    <li class="nav-item-mobile">
                        <div @click="showCategory = !showCategory">
                            商品款式
                            <i class="fas fa-caret-down"></i>
                        </div>
                        <ul v-show="showCategory" class="dropdown-item-mobile">
                            <li class="item-list-mobile" v-for="(category, index) in categories" :key="index" @click="extendToShowType(index)">
                                <div>
                                    {{ category.name }}
                                    <i class="far fa-angle-down"></i>
                                </div>
                                <ul v-show="index == selectedType">
                                    <li class="item-type-mobile" v-for="(secondCat, index) in category.secondCategories" :key="index"
                                        @click="redirectProduct(category.category, secondCat.category)">
                                        {{ secondCat.name }}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item-mobile">
                        <div @click="directPush('info')">
                            <div>店鋪資訊</div>
                        </div>
                    </li>
                    <li class="nav-item-mobile">
                        <div @click="directPush('problem')">
                            <div>常見問題</div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { getCategories } from '@/utils/apiService.js' 
import sidemenu from '@/assets/images/sidemenu.png'

export default {
    name: 'header',
    data() {
        return {
            categories: [
                {
                    name: '黃金',
                    category: 'golden',
                    secondCategories: [
                        { name: '黃金戒指（女）', category: 'wring'},
                        { name: '黃金戒指（男）', category: 'mring'},
                        { name: '黃金對戒', category: 'couplering'},
                        { name: '黃金手鍊（環）', category: 'bracelet'}
                    ]
                }, 
                { 
                    name: '白金',
                    category: 'platinum',
                    secondCategories: [
                        { name: '白金戒指', category: 'test' },
                        { name: '白金項鍊', category: 'platinumtest' }
                    ]
                },
                {
                    name: '鑽石',
                    category: 'diamond',
                    secondCategories: [
                        { name: '求婚鑽戒', category: 'test' }
                    ]
                },
                 {
                    name: '對戒',
                    category: 'couple',
                    secondCategories: []
                }
            ],
            sidemenu: sidemenu,
            showMenu: false,
            showCategory: false,
            selectedType: null
        }
    },

    watch: {
        showMenu(newValue, oldValue) {
            if (!newValue) {
                this.showCategory = false
                this.showType = false
            }
        }
    },

    async mounted() {
        // this.categories = await getCategories()
    },

    methods: {
        redirectProduct(category, type) {
            this.closeMenu()
            this.$router.push({ path: `/web/${category}/${type}`})
        },

        directPush(path) {
            this.closeMenu()
            this.$router.push(`/web/${path}`)
        },

        extendToShowType(index) {
            if (this.selectedType === index) {
                this.selectedType = null
                return
            }
            this.selectedType = index
        },

        closeMenu() {
            this.showMenu = false
        }
    }
}
</script>
