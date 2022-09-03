<template>
    <div class="web-header">
        <div class="header-content">
            <div class="banner"></div>
            <div class="logo" @click="$router.push('/')"></div>
        </div>
        <nav class="web-nav">
            <div class="nav-list">
                <div class="nav-wrap">
                    <a class="nav-item" href="javascript:void(0)" @click="$router.push('/')">
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
                    <a class="nav-item" href="javascript:void(0)" @click="$router.push('/info')">
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            店鋪資訊
                        </div>
                    </a>
                </div>
                <div class="nav-wrap">
                    <a class="nav-item" href="javascript:void(0)" @click="$router.push('/problem')">
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
                        <div @click="directPush('')">
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
                        { name: '黃金對戒', category: 'cpring'},
                        { name: '墜子', category: 'pendant'},
                        { name: '小寶寶金飾', category: 'baby'},
                        { name: '收藏', category: 'collection'},
                        { name: '金塊', category: 'block'},
                        { name: '其他', category: 'others'},
                    ]
                }, 
                { 
                    name: '白金',
                    category: 'silver',
                    secondCategories: [
                        { name: '項鍊（男）', category: 'mnecklace' },
                        { name: '項鍊（女）', category: 'wnecklace' },
                        { name: '對戒', category: 'cpring' }
                    ]
                },
                {
                    name: '鑽石',
                    category: 'diamond',
                    secondCategories: [
                        { name: '求婚鑽戒', category: 'couple' },
                        { name: '鑽石項鍊', category: 'necklace' }
                    ]
                },
                 {
                    name: '對戒',
                    category: 'couple',
                    secondCategories: [
                        { name: '結婚對戒', category: 'marriedring' }
                    ]
                }
            ],
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

    methods: {
        redirectProduct(category, type) {
            this.closeMenu()
            this.$router.push({ path: `/${category}/${type}`})
        },

        directPush(path) {
            this.closeMenu()
            this.$router.push(`/${path}`)
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
