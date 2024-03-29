export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'NL Viagens Nilsara',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css', '@/assets/fonts/stylesheet.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/v-html-secure',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    'nuxt-graphql-request',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // 'nuxt-vite',
  ],

  /* vite: {
    ssr: true,
  }, */

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-facebook-pixel-module',
  ],

  facebook: {
    track: 'PageView',
    pixelId: '758928589222147',
    autoPageView: true,
    debug: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  graphql: {
    clients: {
      admin: {
        endpoint: `${process.env.BASE_URL}/graphql`,
      },
      assets: {
        endpoint: `${process.env.BASE_URL}/assets`,
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
}
