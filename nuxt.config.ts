// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  plugins: [
    {src: '~/plugins/myPlugin'}
  ],
  css: [
    '@/assets/style.css'
  ],
})
