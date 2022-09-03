<template>
    <div class="content-wrap">
        <div class="content">
            <div style="padding: 30px 0px 55px; text-align: center;">
                <div class="info-wrap">
                    <div class="wrap-box">
                        <div style="display: flex; margin: 10px 0px;">
                            <span>店鋪地址：</span>
                            <span>臺南市歸仁區中正南路一段3號</span>
                        </div>
                        <div style="display: flex; margin: 10px 0px;">
                            <span>電話：</span>
                            <span>06-2300303</span>
                        </div>
                        <div style="display: flex; margin: 10px 0px;">
                            <span>Facebook：</span>
                            <a href="https://www.facebook.com/zhenruyijewelry/" target="_blank">
                                真如意珠寶銀樓 台南時尚黃金 gia鑽石專賣
                            </a>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.562676843939!2d120.29308961117928!3d22.966327631533762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7132c0dabee5%3A0x2db85b5d2828f692!2z5Y-w5Y2X55yf5aaC5oSP54-g5a-26YqA5qiTIFpoZW5ydXlpIEpld2VscnkgLSDlj7DljZfmrbjku4Ev5ZOB54mM6YeR6aO-L-aZguWwmum7g-mHkS9HaWHntZDlqZrpkb3miJIv6buD6YeR6auY5YO55pS26LO8!5e0!3m2!1szh-TW!2stw!4v1639843287180!5m2!1szh-TW!2stw"
                    class="iframe-map" height="600">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'info',
    head () {
        return {
            title: '店鋪資訊 | 真如意珠寶銀樓',
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'og-title',
                    name: 'og:title',
                    content: '店鋪資訊 | 真如意珠寶銀樓'
                }
            ]
        }
    },
} 
</script>