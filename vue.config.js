const path = require('path');
const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 去掉注释

// gzip --start
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzip = true // 是否使用gzip
const productionGzipExtensions = ['js', 'css'] // 需要gzip压缩的文件后缀
// gzip --end

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 部署应用时的基本 URL
  // baseUrl: process.env.NODE_ENV === 'production' ? '192.168.60.110:8080' : '192.168.60.110:8080',
  // baseUrl:'/',

  publicPath: IS_PROD ? './' : '/',

  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'dist',

  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',

  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: false,

  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave: false,

  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,

  // Babel 显式转译列表
  transpileDependencies: [],

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,

  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
  crossorigin: '',

  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,

  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)

  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  chainWebpack: () => {

  },
  // css的处理
  css: {
    // 当为true时，css文件名可省略 module 默认为 false
    modules: false,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是 true，开发环境下是 false
    extract: false,
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap: false,
    //向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {
      css: {},
      less: {}
    }
  },

  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,

  // 向 PWA 插件传递选项
  pwa: {},

  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: true, // 热更新
    proxy: null, // 设置代理
  },

  /// 是否使用eslint
  //useEslint: false,

  // 可以用来传递任何第三方插件选项
  pluginOptions: {}
}