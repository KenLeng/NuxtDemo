<template>
    <div>
        <webHeader/>
        <div>
            <Nuxt />
        </div>
        <webFooter/>
    </div>
</template>

<script>
import webHeader from '@/components/web/header.vue'
import webFooter from '@/components/web/footer.vue'
export default {
    head: {
        title: '真如意zhenruyijewelry'
    },
    components: { 'webHeader': webHeader, 'webFooter': webFooter },
}
</script>

<style scope>
</style>
