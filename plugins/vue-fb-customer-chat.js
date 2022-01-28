import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.use(VueFbCustomerChat, {
    page_id: "916807005075051", // 輸入 Facebook Page ID,
    theme_color: '#6699cc', // 設定messenger顏色
    locale: 'zh_TW', // 設定語言
    logged_in_greeting: "嗨~有問題可以私訊我喔！", //登入狀態歡迎詞
    logged_out_greeting: "您好，很高興為您服務" //登出(未登入)狀態歡迎詞
})