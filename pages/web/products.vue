<template>
    <div>
        商品款式
        {{ $route.params }}
    </div>
</template>

<script>
export default {
    name: 'products',
    data() {
        return {
            category: 'all'
        }
    },
    mounted() {
        console.log('hahahahah')
    }
}
</script>