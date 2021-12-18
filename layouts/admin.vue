<template>
    <div>
        <appHeader/>
        <div>
            <Nuxt />
        </div>
        <appFooter/>
    </div>
</template>

<script>
import appHeader from '@/components/admin/header.vue'
import appFooter from '@/components/admin/footer.vue'
export default {
    components: { 'appHeader': appHeader, 'appFooter': appFooter },
    data () {
        return {
           
        }
    },

    created() {},

    methods: {}
}
</script>
<style scope>
</style>
