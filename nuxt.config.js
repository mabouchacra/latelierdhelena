
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "L'atelier d'Héléna - Pâtisseries fines et gourmandes",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lato:400,700'},
      { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'styles/index.scss',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxt/http',
    '@nuxtjs/sitemap',
  ],
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  sitemap: {
    hostname: 'https://latelierdhelena.fr',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },
    exclude: [
      '/secret',
      '/admin/**'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
