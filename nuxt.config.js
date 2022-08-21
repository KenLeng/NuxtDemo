import { resolve } from 'path';

export default {
  server: {
    port: 3000
  },
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtDemo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
    '/api': 'http://localhost:3000/'
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
