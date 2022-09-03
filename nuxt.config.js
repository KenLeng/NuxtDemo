import { resolve } from 'path';

export default {
  server: {
    port: process.env.SERVER_PORT,
    host: process.env.SERVER_HOST
  },
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '真如意珠寶銀樓Zhenruyi Jewelry',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '真如意珠寶銀樓Zhenruyi Jewelry 位於台南市歸仁區，擁有多種款式，我們提供黃金飾品、鉑金飾品、K金飾品、GIA認證鑽石、求婚鑽戒、結婚對戒、翡翠玉品、天然珍珠飾品、珠寶設計客製化服務…等等。『誠信、創新、服務』一直是我們承諾的三大保證，秉持以客為本的理念重點，提供優良的服務和品質保證且未來將繼續提升各方面服務項目來永續經營，藉此來回饋顧客對我們的支持與信任。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss',
    'swiper/swiper-bundle.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/axios",
    { src: "@/plugins/swiper.js", mode: 'client', ssr: false },
    { src: '@/plugins/vue-fb-customer-chat', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios"
  ],

  axios: {
    proxy: true
  },

  // To resolve axios in nuxt caused CORS problem
  proxy: {
    '/api': 'http://localhost:3001/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["axios"]
  },

  serverMiddleware: [
    // API middleware
    '@/server/index.js'
  ]
}
