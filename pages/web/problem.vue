<template>
    <div class="content-wrap">
        <div class="content">
            <div class="problem-wrap">
                <div class="each-problem">
                    <div>
                        <i class="fas fa-question-circle"></i>
                        <span>是否為純金 ?</span>
                    </div>
                    <div>
                        <i class="fas fa-comments"></i> 
                        <span>只要標明純金的商品就是純金，購買時會附上保證卡。我們實體店面在台南，請放心購買。</span>
                    </div>
                </div>
                <div class="each-problem">
                    <div>
                        <i class="fas fa-question-circle"></i>
                        <span>網路小編回覆時間 ?</span>
                    </div>
                    <div>
                        <i class="fas fa-comments"></i>
                        <span>回覆訊息時間基本上是早上10:00 ~ 21:00，門市忙碌時回覆較慢敬請見諒。</span>
                    </div>
                </div>
                <div class="each-problem">
                    <div>
                        <i class="fas fa-question-circle"></i>
                        <span>家中有很多金屬飾品，不知道是否為黃金，你們能幫忙鑑定嗎 ?</span>
                    </div>
                    <div>
                        <i class="fas fa-comments"></i>
                        <span><b>可以的</b>，真如意回收經驗豐富，專業現場鑑定服務。除了黃金之外，K金、白金也有回收。</span>
                    </div>
                </div>
                <div class="each-problem">
                    <div>
                        <i class="fas fa-question-circle"></i>
                        <span>請問為什麼黃/白金商品價格每天都會不一樣 ?</span>
                    </div>
                    <div>
                        <i class="fas fa-comments"></i>
                        <span>因黃/白金本身價格每日會有所波動，根據國際盤所計算出當日價格 (計算方式 : 金價 x 金重 + 工資)。</span>
                    </div>
                </div>
                <div class="each-problem">
                    <div>
                        <i class="fas fa-question-circle"></i>
                        <span>店面款式會更多嗎 ?</span>
                    </div>
                    <div>
                        <i class="fas fa-comments"></i>
                        <span>網站更新速度較慢，現場門市提供更多選擇，歡迎試戴挑選，目前<b>商品依門市為主</b>。</span>
                    </div>
                </div>
                <div class="each-problem">
                    <div>
                        <i class="fas fa-question-circle"></i>
                        <span>付款方式有哪些 ?</span>
                    </div>
                    <div>
                        <i class="fas fa-comments"></i>
                        <span>實體店面可以<b>現金</b>及<b>信用卡付款</b>。</span>
                    </div>
                </div>
                <div class="each-problem">
                    <div>
                        <i class="fas fa-question-circle"></i>
                        <span>請問除了黃/白金/鑽石還有販賣其他商品嗎 ?</span>
                    </div>
                    <div>
                        <i class="fas fa-comments"></i>
                        <span>黃/白/Ｋ金、白銀、鑽石、翡翠、珍珠等，種類非常多可挑選。</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'problem',
}
</script>

<style lang="scss" scope>
    .content {
        .problem-wrap {
            width: 1100px;
            margin: 0 auto;
            position: relative;
            top: 20px;
            .each-problem {
                display: flex;
                flex-direction: column;
                margin-bottom: 30px;
                div:nth-child(odd) {
                    position: relative;
                    left: -50px;
                    font-weight: 700;
                    font-size: 22px;
                    background-color: rgb(95 , 89 , 68);
                    color: #fff;
                    padding: 12px 0 12px 15px;
                    border-radius: 15px;
                    span {
                        padding-left: 5px;
                    }
                }
                div:nth-child(even) {
                    position: relative;
                    left: 50px;
                    top: 5px;
                    font-weight: 700;
                    font-size: 22px;
                    background-color: #fff;
                    color: rgb(95 , 89 , 68);
                    padding: 12px 0 12px 15px;
                    border-radius: 15px;
                    border: 5px dashed rgb(95 , 89 , 68);
                    span {
                        padding-left: 5px;
                    }
                    b {
                        color: red;
                    }
                }
            }
        }
        
    }
</style>