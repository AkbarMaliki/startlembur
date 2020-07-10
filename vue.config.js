const path = require('path')
const laravel = 'false'
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const PurgecssPlugin = require('purgecss-webpack-plugin')
// const glob = require('glob-all')
// console.log(process.env.NODE_ENV)
// const {
//   InjectManifest
// } = require('workbox-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  // outputDir: laravel == 'true' ? '../public' : '',
  // indexPath: laravel == 'true' ? process.env.NODE_ENV === 'production'
  //   ? '../resources/views/index.blade.php'
  //   : 'index.html' : '',

  chainWebpack: config => {
    config.resolve.alias.set('~', resolve('src'))
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        swSrc: 'src/service-worker.js',
        exclude: [
            /\.map$/, 
            /manifest\.json$/ 
        ],
    },
    themeColor: '#1da025'
},
  configureWebpack: {
    plugins: [
      // new PurgecssPlugin({
      //   paths: glob.sync([
      //     path.join(__dirname, "./src/**/*.html"),
      //     path.join(__dirname, "./src/**/*.vue"),
      //     path.join(__dirname, "./src/**/*.js")
      //   ], {
      //     nodir: true
      //   }),
      //   styleExtensions: [".css"],
      //   // whitelist: ['html', 'body'],
      //   whitelist: ["body", "html"]
      //   // extractors: [{
      //   //   extractor: class {
      //   //     static extract(content) {
      //   //       return content.match(/[A-z0-9-:\\/]+/g)
      //   //     }
      //   //   },
      //   //   extensions: ['vue']
      //   // }]
      // }),
      // new PrerenderSPAPlugin({
      //   staticDir: path.join(__dirname, 'dist'),
      //   // Required - Routes to render.
      //   routes: ['/', '/testing', '/testing/template'],
      // })
    ]
  },

  lintOnSave: false,
  publicPath: '',
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/my-project/'
  // : '/',

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    },
    cordovaPath: 'cordova'
  }
}
