const pkg = require('./package')
const metaData = require('./src/assets/data/meta.json')

module.exports = {
  mode: 'universal',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'image_src', type: 'image/png', href: '' }
    ]
  },

  loading: false,

  css: [
    '@/assets/styles/layout/index.styl',
    '@/assets/styles/object/index.styl'
  ],

  plugins: [
    '@/plugins/vue-scrollto.js',
    '@/plugins/directive/vue-scroll.js',
    '@/plugins/directive/vue-mousemove.js',
    '@/plugins/directive/vue-color-commit.js'
  ],

  modules: [
    '@nuxtjs/style-resources',
    // ['@nuxtjs/google-tag-manager', { id: '' }]
  ],

  build: {

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    publicPath: '/assets/scripts/'

  },

  router: {
    base: '/raiolway-info/'
  },

  generate:{
    dir: './dist/htdocs/raiolway-info/',
  },

  srcDir: 'src/',

  styleResources: {
    stylus: ['./assets/styles/resource/index.styl']
  },

  env: {
    metaData: metaData
  }
}
