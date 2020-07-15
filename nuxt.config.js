
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: "L'atelier d'Héléna - Pâtisseries fines et gourmandes",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "L'atelier d'Héléna - Pâtisseries fines et gourmandes, fait maison dans la région de Bordeaux" },
      { name: 'og:description', content: "L'atelier d'Héléna - Pâtisseries fines et gourmandes, fait maison dans la région de Bordeaux" },
      { name: 'og:url', content: "https://latelierdhelena.fr" },
      { name: 'og:title', content: "L'atelier d'Héléna - Pâtisseries fines et gourmandes" },
      { name: 'og:site_name', content: "L'atelier d'Héléna - Pâtisseries fines et gourmandes" },
      { name: 'og:type', content: "website" },
      { name: 'og:locale', content: 'fr_FR'}
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
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: {
    id: 'UA-168162771-1'
  },
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Sitemap: 'https://latelierdhelena.fr/sitemap.xml'
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
    },
  },
  minifyCSS: true,
  minifyJS: true
}
