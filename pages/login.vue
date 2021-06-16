<template>
    <div class="login" v-loading="isLoading">
        <img src="@/assets/images/stockfeel.png">
        <div>
            <div class="login-label">Customer Data Platform</div>
            <input
                type="text"
                class="input-text"
                placeholder="郵件信箱"
            />
            <input
                type="password"
                class="input-text"
                placeholder="密碼"
            />
            <input
                type="checkbox"
                class="input-checkbox"
            />
            <label>保持登入</label>
            <button
                role="button"
                class="input-button"
                @click="login"
            >
                登入
            </button>
        </div>
        <div class="login-label">
            如您有在登入上遇到任何問題 &nbsp
            <a href="">請洽管理員</a>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'login',
    name: 'login',

    data () {
        return {
            isLoading: false
        }
    },

    created () {},
    mounted () {},

    methods: {
        login() {
            this.isLoading = true
            setTimeout(() => {
                this.isLoading = false
                window.location.assign('/app')    
            }, 500)
            
        }
    }
}
</script>