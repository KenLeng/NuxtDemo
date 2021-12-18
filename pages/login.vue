<template>
    <div class="login" v-loading="isLoading">
        <div>
            <div class="login-label">Zhenruyi Jewelry</div>
            <input
                type="text"
                class="input-text"
                placeholder="輸入帳號"
            />
            <input
                type="password"
                class="input-text"
                placeholder="輸入密碼"
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
                window.location.assign('/admin')    
            }, 500)
            
        }
    }
}
</script>