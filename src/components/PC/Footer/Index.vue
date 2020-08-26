<!--
 * @Description: 公共Footer组件
 * @Date: 2020-03-14 09:02:55
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-27 14:26:48
 -->
<template>
  <div :class="['footer',{'footer-transparent':type===2}]">
    <div class="footer-nav">
      <div class="footer-nav-top">
        <div class="footer-nav-top-left">
          <ul>
            <li @click="onMainChain">{{ $t('header.chain') }}</li>
            <li @click="onFAQ">{{ $t('header.faq') }}</li>
            <li @click="onPrivacy">{{ $t('footer.privacy') }}</li>
            <li @click="onTermsService">{{ $t('footer.TermsOfService') }}</li>
          </ul>
        </div>

        <div class="footer-nav-top-right">
          <img @click="onMedium" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.7/src/assets/pc2/icon_medium.png" alt srcset />
          <img @click="onTwitter" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.7/src/assets/pc2/icon_twitter.png" alt srcset />
          <img @click="onGithub" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.7/src/assets/pc2/icon_github.png" alt srcset />
          <img @click="onCat" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.7/src/assets/pc2/icon_cat.png" alt srcset />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: Number, //1: 白色背景 灰色字体  2:浮动 透明背景 白色字体
      default: 1
    }
  },
  data() {
    return {};
  },
  methods: {
    onMainChain() {
      window.open("https://www.netcloth.org/#/");
    },

    onFAQ() {
      if (this.$i18n.locale == "zh") {
        window.open("https://netcloth.zendesk.com/", "_blank");
      } else {
        window.open(
          "https://docs.google.com/document/d/1SZoqHKF6ORVWZksjdVNkuB_w88VUi8d27FTKvEweLe4/edit?usp=sharing",
          "_blank"
        );
      }
    },

    onPrivacy() {
      if (this.$i18n.locale == "zh") {
        window.open(
          "http://storage.netcloth.org/NetClothPrivacyPolicy_zh.htm",
          "_blank"
        );
      } else {
        window.open(
          "http://storage.netcloth.org/NetClothPrivacyPolicy.htm",
          "_blank"
        );
      }
    },

    onTermsService() {
      if (this.$i18n.locale == "zh") {
        window.open(
          "http://storage.netcloth.org/TermsofService_zh.htm",
          "_blank"
        );
      } else {
        window.open("http://storage.netcloth.org/TermsofService.htm", "_blank");
      }
    }

    ,onMedium() {
      window.open('https://medium.com/@NetCloth', '_blank')
    }

    ,onGithub() {
      window.open('https://github.com/netcloth', '_blank')
    }
    ,onTwitter() {
      window.open('https://twitter.com/NetCloth', '_blank')
    }

    ,onCat() {
      window.open('https://www.reddit.com/r/NetCloth', '_blank')
    }
  }
};
</script>


<style lang="scss" scoped>
.footer {
  width: 100%;
  background: #ffffff;

  &-nav {
    width: 1100px;
    margin: 0 auto;

    &-top {
      display: flex;
      justify-content: space-between;
      padding: 30px 0;
      border-bottom: 1px solid rgba(173, 175, 186, 0.2);
      &-left {
        .nav-a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          color: rgba(98, 99, 107, 1);
          margin-right: 40px;
        }

        ul {
          display: inline;
        }
        li {
          display: inline;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          color: rgba(98, 99, 107, 1);
          margin-right: 40px;
          cursor: pointer;
        }
      }
      &-right {
        > img {
          margin-left: 40px;
          width: 20px;
          height: 20px;
          object-fit: contain;
          cursor: pointer;
        }
      }
    }

    &-bottom {
      display: none;
      // display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      text-align: center;
      > img {
        margin-right: 10px;
        width: 13px;
        height: 13px;
      }
      a {
        font-size: 13px;
        font-weight: 400;
        color: rgba(98, 99, 107, 1);
      }
    }
  }
}

.footer-transparent {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: transparent;
  .footer-nav {
    &-top {
      border-color: #adafba;
      &-left {
        .nav-a {
          color: rgba(173, 175, 186, 1);
        }
      }
    }
    &-bottom {
      color: rgba(173, 175, 186, 1);
    }
  }
}
</style>