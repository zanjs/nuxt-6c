module.exports = {
  /*
   ** Headers of the page <meta http-equiv="x-dns-prefetch-control" content="on">
   * <link rel="dns-prefetch" href="//zanjs.com">
   */
  head: {
    title: '六城海淘',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'renderer', name: 'renderer', content: 'webkit' },
      { hid: 'description', name: 'description', content: '6city project' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: '//api.6city.com' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.6.guapin.com/static/libs/layout-i/0.0.1/layouti.mini.css' }
    ],
    script: [
      { src: 'https://cdn.6.guapin.com/static/libs/view-m/0.0.1/view.min.js' },
      { src: 'https://cdn.6.guapin.com/static/libs/bscroll/1.0.1/bscroll.min.js' },
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.3.0.js' }
    ]
  },
  css: [
    'init.cs',
    'layouti.css',
    '~/assets/scss/main.scss'
  ],
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  // loading: '~components/loading.vue',
  plugins: [
    // '~plugins/vue-notifications'
    { src: '~plugins/toasted', ssr: false }
    // { src: '~plugins/vue-lazy-images', ssr: false }
    // { src: '~plugins/mini-toastr', ssr: false }
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        // vueLoader.options.loaders.sass = 'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['better-scroll', 'axios'],
    templates: [{
      type: 'app',
      src: './templates/app.html'
    }],
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
      require('postcss-px2rem2')({ remUnit: 75, modelCss: true }),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  },
  // modules: [
  //   '@nuxtjs/toast'
  // ],
  // toast: {
  //   position: 'top-center'
  // },
  router: {
    middleware: ['auth']
  }
}
