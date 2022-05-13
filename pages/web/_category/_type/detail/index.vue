<template>
    <div class="content-wrap">
        <div class="content">
            <div>
                <div class="">黃金 > 戒指 > 黃金戒指（男）</div>
                <div style="display: flex; justify-content: space-evenly;">
                    <div>
                        <img width="400" src="@/assets/images/demo1.png" alt="image"/>
                    </div>
                    <div>
                        <div>黃金戒指（男）</div>
                        <div>重量 : 100g</div>
                        <div>介紹介紹介紹介紹介紹介紹</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {}
    },
    created() {
        console.log('detaildetail', this.$route.params)
    }
}
</script>