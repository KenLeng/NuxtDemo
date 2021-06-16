<template>
    <div>
        <nav>
            <div class="flex-div header-wrap">
                <div class="flex-div header-wrap-img">
                    <div style="padding: 0px 30px; cursor: pointer" @click="toggleItemPanel">
                        <img 
                            class="nav_icon"
                            :class="{actived: active}"
                        >
                    </div>
                    <div>
                        <img src="@/assets/images/stockfeel.png" width="60">
                    </div>
                </div>
                <div class="inline-grid-div header-wrap-menu">
                    <div class="each-menu" :class="{actived: activeMenu === 'overview'}" @click="postMenuID('overview')">總覽</div>
                    <div class="each-menu" :class="{actived: activeMenu === 'userData'}" @click="postMenuID('userData')">用戶數據</div>
                    <div class="each-menu" :class="{actived: activeMenu === 'marketingTool'}" @click="postMenuID('marketingTool')">行銷工具</div>
                    <div class="each-menu" :class="{actived: activeMenu === 'setting'}" @click="postMenuID('setting')">設定</div>
                </div>
                <div class="flex-div header-wrap-user">
                    <div>
                        <button>
                            <i class="fas fa-bell"></i>
                            {{ infoCount }} 則新通知
                        </button>
                    </div>
                    <div>
                        <span>{{ getTimeState }}, Ken</span>
                    </div>
                    <div>
                        <a>
                            <img
                                class="user-img"
                                src="https://lh3.google.com/u/0/ogw/ADGmqu8QPL1Cgq7dlP_-iYZy8DJpivKch-myM4Ymf-J5=s32-c-mo"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
        <div class="flex-div content-wrap">
            <div class="side-item-wrap"
                :class="{active: active}">
                <div class="each-item" v-for="item in sideItems">
                    <div @click="redirectPage(item)"
                        class="each-item-block"
                        :class="{focus: activeItem === item.id}">
                        <img :src="item.img" />
                        <label>{{ item.name }}</label>
                    </div>
                </div>
            </div>
            <div class="right-content-wrap" :class="{'content-collapse': active}">
                <Nuxt />
            </div>
        </div>
        <footer>
            <div>
                <span>© Stockfeel. All rights reserved</span>
            </div>
        </footer>
    </div>
</template>

<script>
import deviation from '@/assets/images/deviation.png'
import people from '@/assets/images/people.png'
import article from '@/assets/images/article.png'
export default {
    data () {
        return {
            active: false,
            sideItemRef: {
                userData: [
                        {
                            img: deviation,
                            menuId: 'userData',
                            id: 'userDataOverview',
                            name: '用戶數據總覽'
                        },
                        {
                            img: people,
                            menuId: 'userData',
                            id: 'memberFocus',
                            name: '會員分眾'
                        },
                        {
                            img: article,
                            menuId: 'userData',
                            id: 'contentData',
                            name: '內容數據'
                        }
                ],
                marketingTool: {

                },
                setting: {

                }
            },
            sideItems: [],      //左側欄項目
            activeItem: '',     //選中的項目
            activeMenu: '',     //選中的menu
            infoCount: 0
        }
    },

    computed: {
        getTimeState() {
            const now = new Date()
            const hour = now.getHours()
            let state = ''
            if (hour >= 0 && hour <= 10) {
                state = '早安'
            } else if (hour > 10 && hour < 18) {
                state = '午安'
            } else {
                state = '晚安'
            }
            return state
        }
    },

    created() {
        const path = this.$route.path.split('/')
        if (path.length <= 2 || !path[1] || !path[2]) {
            this.$router.push({path: '/app'})
        }
        this.postMenuID(path[1])
        this.activeItem = path[2]
    },

    methods: {
        toggleItemPanel() {
            this.active = !this.active
        },
        postMenuID(menu) {
            this.activeMenu = menu
            this.sideItems = this.sideItemRef[menu]
        },
        redirectPage(item) {
            this.activeItem = item.id
            this.$router.push({
                path: `/${item.menuId}/${item.id}`
            })
        }
    }
}
</script>
<style scope>
</style>
