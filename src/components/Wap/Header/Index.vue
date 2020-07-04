<!--
 * @Description: wap 头部
 * @Date: 2020-03-21 10:26:03
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-24 14:39:32
 -->
<template>
  <div :class="['header',{'header-white':type===2}]">
    <div class="header-nav">
      <div class="header-nav-logo" @click="goIndex">
        <img v-if="type===1" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.4/src/assets/pc2/logo-white.png" />
        <img v-else src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.4/src/assets/pc2/logo-white.png" />
        NetCloth APP
      </div>

      <div class="header-btn">
        <span class="btn-en" @click="changLang('en')" v-if='language=="zh"'>EN</span>
        <span class="btn-zh" @click="changLang('zh')" v-if='language=="en"'>中文</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    type: {
      type: Number, //1: 透明背景 白色字体  2:白色背景 灰色字体
      default: 1
    }
  },
  data() {
    return {
      isOpen: false,
      language: this.$store.state.language
    };
  },

  mounted() {
    var self = this
    setTimeout(() => {
          let lan = self.$i18n.locale;
          console.log('lan is ' + lan)
          if (lan === 'zh' || lan === 'en') {
            self.changLang(lan)
          }              
    }, 500);
  },


  methods: {
    goIndex() {
      let router = this.$route.name;
      if (router !== "Index") {
        this.$router.replace("/");
      }
    },
    Open() {
      this.isOpen = !this.isOpen;
    },

    changLang(value) {
      console.log('change v ' + value)
      localStorage.setItem("language", value);
      this.$i18n.locale = value;
      this.language = value;
      if (value === 'zh') {
        this.$store.commit('changeToZh')
      }
      else {
        this.$store.commit('changeToEn')
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &-nav {
    width: 100%;
    height: 269px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 90px;

    &-logo {
      display: flex;
      align-items: center;
      font-size: 81px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);

      > img {
        width: 72px;
        height: 72px;
        object-fit: cover;
        margin-right: 47px;
      }
    }
    &-menu {
      display: none;
      > img {
        width: 94px;
        height: 78px;
      }
    }
  }
  &-menu-open {
    position: absolute;
    width: 100%;
    top: 0;
    background: rgba(14, 34, 58, 1);

    .menu-close {
      > img {
        width: 70px;
        height: 70px;
      }
    }

    .header-nav-logo {
      color: rgba(255, 255, 255, 1) !important;
    }

    &-nav {
      li {
        display: flex;
        align-items: center;
        height: 224px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        background: rgba(14, 34, 58, 1);
        padding: 0 90px;

        a {
          font-size: 72px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}

.header-white {
  position: relative;
  background: #ffffff;
  .header-nav {
    &-logo {
      color: #041036;
    }
    &-menu {
      .nav-a {
        color: #62636b;
      }
    }
  }
}

// 过渡动画
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  position: absolute;
  transition: opacity 1s;
}
.fade-leave-to {
  /* position: absolute; */
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
  transition: opacity 1s;
}



.header-btn {
  color: rgba(255, 255, 255, 1);
  z-index: 100;

  top: 0px;
  right: 35px;

  height: 80px;
  line-height: 80px;

  font-size: 63px;
  font-weight: 400;
}

.btn-en {
  cursor: pointer;
  margin-right: 20px;
}

.btn-lin {
  border-right: 1px solid #ffffff;
  height: 24px;
}

.btn-zh {
  cursor: pointer;
  margin-left: 20px;
}

</style>