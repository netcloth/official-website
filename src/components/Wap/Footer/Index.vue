<!--
 * @Description: wap Footer组件
 * @Date: 2020-03-21 11:34:47
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-27 14:28:17
 -->
<template>
  <div class="footer">
    <div class="footer-nav">
      <div class="footer-nav-top">
        <div class="footer-nav-top-one">
            <li @click="onMainChain">{{ $t('header.chain') }}</li>
            <li @click="onFAQ">{{ $t('header.faq') }}</li>
        </div>

        <div class="footer-nav-top-one">
            <li @click="onPrivacy">{{ $t('footer.privacy') }}</li>
            <li @click="onTermsService">{{ $t('footer.TermsOfService') }}</li>
        </div>

        <div class="footer-nav-top-three">
          <img @click="onMedium" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.4/src/assets/pc2/icon_medium.png" alt srcset />
          <img @click="onTwitter" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.4/src/assets/pc2/icon_twitter.png" alt srcset />
          <img @click="onGithub" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.4/src/assets/pc2/icon_github.png" alt srcset />
          <img @click="onCat" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.4/src/assets/pc2/icon_cat.png" alt srcset />
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
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
  font-family: PingFangSC-Regular, PingFang SC;
  background: #ffffff;
  padding: 0 67px;

  &-nav {
    width: 100%;

    &-top {
      display: flex;
      flex-direction: column;
      padding: 134px 0;
      border-bottom: 1px solid rgba(173, 175, 186, 0.2);

      &-one {
        display: flex;
        justify-content: space-around;
        margin-bottom: 112px;

        ul {
          display: inline;
        }
        li {
          display: inline;
          text-decoration: none;
          font-size: 63px;
          font-weight: 400;
          color: rgba(98, 99, 107, 1);
        }
      }

      &-three {
        display: flex;
        justify-content: center;
        > img {
          width: 80px;
          height: 80px;
          margin-right: 80px;
        }
      }
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 90px 0;

      > img {
        margin-right: 45px;
        width: 63px;
        height: 63px;
      }
      a {
        font-size: 67px;
        font-weight: 400;
        color: rgba(173, 175, 186, 1);
      }
    }
  }

  .nav-a {
    text-decoration: none;
    font-size: 72px;
    font-weight: 400;
    color: rgba(4, 16, 54, 1);
  }
}
</style>