const path = require('path');

const ROOT_PATH = path.resolve(__dirname, './');
export default {
  entry: {
    index: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-responsive',
      'dva-loading',
      'react-id-swiper',
      'swiper',
    ]

  },
  html: { "template": "./src/index.ejs" },
  hash: false,
  extraBabelPlugins: [
    ["import", {"libraryName": "antd", "libraryDirectory": "es", "style": "css"}, 'antd'],
    ["import", {"libraryName": "lodash", "libraryDirectory": "", "camel2DashComponentName": false}, 'lodash']
  ],
  extraBabelIncludes: [
    "node_modules/swiper",
    "node_modules/react-id-swiper",
    "node_modules/dom7",
  ],
  env: {
    "development": {
      "extraBabelPlugins": ["dva-hmr"]
    }
  },
  alias: {
    components: path.resolve(ROOT_PATH, 'src/components'),
    models: path.resolve(ROOT_PATH, 'src/models'),
    routes: path.resolve(ROOT_PATH, 'src/routes'),
    utils: path.resolve(ROOT_PATH, 'src/utils'),
    assets: path.resolve(ROOT_PATH, 'src/assets'),
    styles: path.resolve(ROOT_PATH, 'src/styles'),
    config: path.resolve(ROOT_PATH, 'src/config'),
  },


}
