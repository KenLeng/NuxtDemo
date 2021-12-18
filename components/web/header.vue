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
            <a class="nav-item" href="javascript:void(0)" @click="$router.push('/web/products')">
                商品款式
                <i class="fas fa-rings-wedding"></i>
            </a>
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
}
</script>
