<!--
 * @Description: 描述
 * @Date: 2020-03-13 23:09:53
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-27 10:23:20
 -->
<template>
  <router-view />
</template>
<style lang="scss">
// 锚点样式重置
.ivu-anchor {
  padding: 0;
}

.ivu-anchor-ink {
  display: none;
}
.ivu-anchor-ink::before {
  display: none;
}
.ivu-anchor-link-title {
  white-space: pre-wrap;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
  color: rgba(4, 16, 54, 1);
  &:hover {
    color: rgba(4, 16, 54, 1);
  }
}

// top
.ivu-back-top i {
  padding: 10px;
}
</style>
