/*
 * @Description: babel配置
 * @Date: 2020-03-13 23:09:53
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-14 11:55:13
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["import", {
      "libraryName": "view-design",
      "libraryDirectory": "src/components"
    }]
  ]
}