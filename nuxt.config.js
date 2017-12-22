module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: '六城海淘',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: '6city project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.ttp.me/layout-i/layouti.mini.css' }
    ],
    script: [
      { src: 'https://cdn.ttp.me/view-m/view.min.js' },
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
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
      require('postcss-px2rem2')({ remUnit: 75, modelCss: true }),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ]
  }
}
