<template>
  <div :class="['header',{'header-white':type===2}]">
    <div class="header-nav">
      <div class="header-nav-left" @click="goIndex">
        <img v-if="type===1" src="@/assets/pc2/logo-white.png" />
        <img v-else src="@/assets/pc2/logo-white.png" />
        NetCloth APP
      </div>

      <div class="header-nav-right">
        <ul>
          <li>{{ $t('header.home') }}</li>
          <li @click="onFAQ">{{ $t('header.faq') }}</li>
          <li @click="onMainChain">{{ $t('header.chain') }}</li>
        </ul>
      </div>
    </div>

    <div class="header-btn">
      <span class="btn-en" @click="changLang('en')" v-if='language=="zh"'>EN</span>
      <!-- <span class="btn-lin" :style="{ borderColor:Pcolor}"></span> -->
      <span class="btn-zh" @click="changLang('zh')" v-if='language=="en"'>中文</span>
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
      language: this.$store.state.language
    };
  },

  computed: {
    // language() {
    //   let l = this.$store.state.language
    //   console.log('language ' + this.$store +  l) 
    //   return l
    // }
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

    onMainChain() {
      window.open("https://www.netcloth.org/#/");
    },

    onFAQ() {
      if (this.$i18n.locale == "zh") {
        window.open("https://netcloth.zendesk.com/",'_blank');
      } else {
        window.open("https://docs.google.com/document/d/1SZoqHKF6ORVWZksjdVNkuB_w88VUi8d27FTKvEweLe4/edit?usp=sharing",'_blank');
      }
    },

    changLang(value) {
      // UserModule.ResetLanguage(value);
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
    height: 80px;
    margin: 0 auto;

    &-left {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      cursor: pointer;

      > img {
        margin-right: 12px;
        width: 37px;
        height: 28px;
        object-fit: cover;
      }
    }

    &-right {
      display: inline;
      ul {
        display: inline;
      }
      li {
        display: inline;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        text-decoration: none;
        margin-left: 80px;
        cursor: pointer;
      }
    }
  }
}

.header-btn {
  color: rgba(255, 255, 255, 1);

  position: absolute;
  top: 0px;
  right: 35px;

  height: 80px;
  line-height: 80px;

  font-size: 14px;
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

.header-white {
  position: relative;
  background: #ffffff;
  .header-nav {
    &-left {
      color: #041036;
    }
    &-right {
      .nav-a {
        color: #62636b;
      }
    }
  }
}
</style>