<template>
    <div class="content-wrap">
        <div class="content">
            <div class="detail-wrap">
                <div class="product-map">{{ detailInfo.category }} > {{ detailInfo.typeName }}</div>
                <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
                    <img class="img-wrap" :src="getAssetsImage(detailInfo.productList.imgName)" :alt="detailInfo.typeName" />
                    <div class="intro">
                        <div class="bottom-line">
                            <p>詳情請致電06-2300303</p>
                            <br>
                            <a href="../../info">前往店鋪資訊</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Base64 } from 'js-base64';

export default {
    name: 'detail',
    data() {
        return {
            detailInfo: {}
        }
    },
    created() {
        this.detailInfo = JSON.parse(Base64.decode(this.$route.query.product))
    },

    methods: {
        getAssetsImage(name) {
            return require(`@/assets/images/product/${name}.jpg`)
        },
    }
}
</script>