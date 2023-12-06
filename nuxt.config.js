export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'engineersapps',
    title: 'ShopHatt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './shophattFavicon/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: './shophattFavicon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: './shophattFavicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: './shophattFavicon/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '70x70',
        href: './shophattFavicon/ms-icon-70x70.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        href: './shophattFavicon/ms-icon-144x144.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '150x150',
        href: './shophattFavicon/ms-icon-150x150.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '310x310',
        href: './shophattFavicon/ms-icon-310x310.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '36x36',
        href: './shophattFavicon/android-icon-36x36.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: './shophattFavicon/android-icon-48x48.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '72x72',
        href: './shophattFavicon/android-icon-72x72.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: './shophattFavicon/android-icon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        href: './shophattFavicon/android-icon-144x144.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: './shophattFavicon/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: './shophattFavicon/apple-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '57x57',
        href: './shophattFavicon/apple-icon-57x57.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '60x60',
        href: './shophattFavicon/apple-icon-60x60.png',
      },


      {
        rel: 'icon',
        type: 'image/png',
        sizes: '72x72',
        href: './shophattFavicon/apple-icon-72x72.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '76x76',
        href: './shophattFavicon/apple-icon-76x76.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '114x114',
        href: './shophattFavicon/apple-icon-114x114.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '120x120',
        href: './shophattFavicon/apple-icon-120x120.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '144x144',
        href: './shophattFavicon/apple-icon-144x144.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '152x152',
        href: './shophattFavicon/apple-icon-152x152.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '180x180',
        href: './shophattFavicon/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: './shophattFavicon/apple-icon-precomposed.png',
      },
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  // ],

  
  modules: [
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'nur.azam.bd@gmail.com',
      },
      // smtp: {
      //   host: "smtp.example.com",
      //   port: 587,
      // },

      // user: 'main@rtchubs.com',
      //     pass: 'MAhmed34',

      smtp: {
        service: 'gmail',
        auth: {
          user: 'nur.azam.bd@gmail.com',
          pass: 'bad2141981',
        },
      },

    }],
  
  ],
  
    // axios: {
      
    // },
  
  

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


  tailwindcss: {
    jit: true
  }
}
