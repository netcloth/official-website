<!--
 * @Description: pc端首页
 * @Date: 2020-03-14 09:13:19
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-27 10:25:18
 -->

<template>
  <div class="index">
    <Header></Header>

    <!-- move slogan -->
    <div class="index-first">
      <div class="index-first-video">
        <video
          controls="controls"
          loop="loop"
          autoplay="autoplay"
          muted="muted"
          class="index-first-video-bg"
          src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/video-bg.mp4"
          poster="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/bg-first.png"
        ></video>
      </div>

      <div class="index-first-box">
        <div class="index-first-box-left">
          
          <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/phone-model@2x.png" alt srcset />

          <video
          controls="controls"
          loop="loop"
          autoplay="autoplay"
          muted="muted"
          class="index-first-box-left-bg"
          :src="landpageVideoPath"
          poster="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/bg-first.png">
          </video>

          

        </div>

        <div class="index-first-box-right">
          <div class="index-first-box-right-header">NetCloth APP</div>
          <div class="index-first-box-right-des">{{$t('header.slogan')}}</div>

          <div class="index-first-box-right-btn">
            <div>
              <Icon type="logo-apple" class="icon" />
              {{ $t('landingPage.ios') }}
              <div class="qrcodes">
                <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/ios_qrcode.png" alt srcset />
              </div>
            </div>
            <div>
              <Icon type="logo-android" class="icon" />
              {{ $t('landingPage.android') }}
              <div class="qrcodes">
                <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/android_qrcode.png" alt srcset />
              </div>
            </div>
            <div class="googleplay">
              <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/logo_google_play.png" alt srcset />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- index0 app 愿景 -->
    <div v-bind:class="classObject">
      <div class="index-0-top"></div>

      <p class="index-0-vision">{{ $t('wish.vision') }}</p>

      <div :class="index_0_bottom_class">
        <div :class="wish1_class">
          <p class="title">{{ $t('wish.title1') }}</p>
          <p class="msg">{{ $t('wish.msg1') }}</p>
        </div>

        <div :class="wish2_class">
          <p class="title">{{ $t('wish.title2') }}</p>
          <p class="msg">{{ $t('wish.msg2') }}</p>
        </div>

        <div :class="wish3_class">
          <p class="title">{{ $t('wish.title3') }}</p>
          <p class="msg">{{ $t('wish.msg3') }}</p>
        </div>
      </div>
    </div>

    <!-- index1  个人网络 -->
    <div class="index-two">
      <div class="index-two-box">
        <div class="index-two-box-left">
          <div class="index-two-box-left-header">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/personnet_ico.png" alt srcset />
            {{ $t('personnet.slogan') }}
          </div>
          <div class="index-two-box-left-des">{{ $t('personnet.desc1') }}</div>
          <div class="index-two-box-left-des">{{ $t('personnet.desc2') }}</div>
        </div>

        <div class="index-two-box-right">
          <img :src="personnetBg" alt srcset />
        </div>
      </div>
      <img class="index-two-box-left-img" src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/personnet_bottom.png" />
    </div>

    <!-- 数据保险箱 -->
    <div class="index-three">
      <div class="index-three-box">
        <div class="index-three-box-left">
          <img :src="databoxBg" alt srcset />
        </div>
        <div class="index-three-box-right">
          <div class="index-three-box-right-header">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/databox_icon.png" alt srcset />
            {{ $t('databox.slogan') }}
          </div>
          <div class="index-three-box-right-des">{{ $t('databox.desc1') }}</div>
          <div class="index-three-box-right-des">{{ $t('databox.desc2') }}</div>
        </div>
      </div>
    </div>

    <!-- chat session -->
    <div class="index-four">
      <div class="index-four-box">
        <div class="index-four-box-left">
          <div class="index-four-box-left-header">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/session_icon.png" alt srcset />
            {{ $t('chat.slogan') }}
          </div>
          <div class="index-four-box-left-des">{{ $t('chat.desc1') }}</div>
          <div class="index-four-box-left-des">{{ $t('chat.desc2') }}</div>
        </div>
        <div class="index-four-box-right">
          <img :src="sessionBg" alt srcset />
        </div>
      </div>
    </div>

    <!-- wallet -->
    <div class="index-fives">
      <div class="index-fives-box">
        <div class="index-fives-box-left">
          <img :src="walletBg" alt srcset />
        </div>
        <div class="index-fives-box-right">
          <div class="index-fives-box-right-header">
            <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wallet_icon.png" alt srcset />
            {{ $t('wallet.slogan') }}
          </div>
          <div class="index-fives-box-right-des">{{ $t('wallet.desc1') }}</div>
          <div class="index-fives-box-right-des">{{ $t('wallet.desc2') }}</div>
        </div>
      </div>
    </div>

    <!-- About Us -->
    <div class="index-six">
      <div class="index-six-box">
        <div class="index-six-box-com">
          <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_business.png" alt srcset />
          <h1>{{ $t('about.business') }}</h1>
          <h2>contact@netcloth.org</h2>
          <h3>{{ $t('about.businessDesc') }}</h3>
        </div>

        <div class="index-six-box-com">
          <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_costom_service.png" alt srcset />
          <h1>{{ $t('about.customServer') }}</h1>
          <h2>contact@netcloth.org</h2>
          <h3>{{ $t('about.customServerDesc') }}</h3>
        </div>

        <div class="index-six-box-qrcodes">
          <img :src="aboutGroupImg" alt srcset />
          <h1>{{ $t('about.officialGroup') }}</h1>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/PC/Header/Index.vue";
import Footer from "@/components/PC/Footer/Index.vue";
import { Icon } from "view-design";

export default {
  name: "Index",
  components: {
    Header,
    Footer,
    Icon
  },

  data() {
    console.log("data");
    return {
      // isEn: this.$store.state.language === 'en'
    };
  },

  computed: {

    ///wishes
    classObject: function() {
      console.log("classObject");
      return {
        "index-0": true,
        "index-0-en": this.$store.state.language === "en"
      };
    },

    index_0_bottom_class: function() {
      return {
        "index-0-bottom": true,
        "index-0-bottom-en": this.$store.state.language === "en"
      };
    },

    wish1_class: function() {
      return {
        wish1: this.$store.state.language === "zh",
        "wish1-en": this.$store.state.language === "en"
      };
    },
    wish2_class: function() {
      return {
        wish2: this.$store.state.language === "zh",
        "wish2-en": this.$store.state.language === "en"
      };
    },
    wish3_class: function() {
      return {
        wish3: this.$store.state.language === "zh",
        "wish3-en": this.$store.state.language === "en"
      };
    },

    aboutGroupImg: function() {
      console.log("get img");
      return this.$store.state.language === "zh"
        ? "https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_community_cn.png"
        : "https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_community_en.png";
    },

    landpageVideoPath: function() {
      return this.$store.state.language === "zh"
        ? ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/landingPage_intro_zh.mp4")
        : ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/landingPage_intro_en.mp4");
    },

    personnetBg: function() {
       return this.$store.state.language === "zh"
        ? ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/personnet_bg.png")
        : ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/personnet_bg_en.png");
    },

    walletBg: function () {
      return this.$store.state.language === "zh"
        ? ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wallet_bg.png")
        : ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wallet_bg_en.png");
    },

    databoxBg: function() {
      return this.$store.state.language === "zh"
        ? ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/databox_bg.png")
        : ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/databox_bg_en.png");
    },

    sessionBg: function() {
      return this.$store.state.language === "zh"
        ? ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/session_bg.png")
        : ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/session_bg_en.png");
    },
    

    /// invalid func
    personNetDesc: function() {
      let t = $t("personnet.desc"); // invalid
      console.log("t is " + t);
      return t;
    }
  },

  methods: {
    onGoogleDownload() {
      window.open(
        "https://play.google.com/store/apps/details?id=com.netcloth.chat",
        "_blank"
      );
    }
  }
};
</script>

<style lang='scss' scoped>
.index {

  /// wishes
  &-0 {
    width: 100%;
    height: 750px;
    &-top {
      width: 100%;
      height: 295px;
      background-image: url('https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wish_big_bg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    &-vision {
      width: 1100px;
      position: absolute;
      margin: -200px 289px;
      left: 0;
      right: 0;

      height: 50px;
      font-size: 36px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #ffffff;
      line-height: 50px;
    }

    &-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1152px;
      height: 544px;
      margin: -136px auto;
      position: relative;

      .wish1 {
        background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wish_1_bg.png");
        background-size: 384px 544px;
        width: 384px;
        height: 544px;
      }

      .wish2 {
        background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wish_2_bg.png");
        background-size: 384px 544px;
        width: 384px;
        height: 544px;
      }

      .wish3 {
        background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wish_3_bg.png");
        background-size: 384px 544px;
        width: 384px;
        height: 544px;
      }

      .title {
        margin-top: 178px;
        margin-left: 58px;
        height: 33px;
        font-size: 24px;
        font-family: PingFangSC, PingFangSC-Medium;
        font-weight: 500;
        text-align: left;
        color: #041036;
        line-height: 33px;
      }

      .msg {
        margin-top: 20px;
        margin-left: 58px;
        width: 280px;
        font-size: 16px;
        line-height: 30px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #62636b;
      }
    }
  }

  &-0-en {
    height: 811px !important ;
  }
  &-0-bottom-en {
    height: 604px !important ;
    // background-color: red;
    .wish1-en {
      background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wish_1_bg_en.png") !important ;
      background-size: 384px 604px !important ;
      width: 384px !important;
      height: 604px !important;
    }

    .wish2-en {
      background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wish_2_bg_en.png") !important ;
      background-size: 384px 604px !important ;
      width: 384px !important ;
      height: 604px !important ;
    }

    .wish3-en {
      background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wish_3_bg_en.png") !important ;
      background-size: 384px 604px !important ;
      width: 384px !important ;
      height: 604px !important ;
    }
  }

  // video
  &-first {

    &-video {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      top: 0;
      z-index: -1;

      &-bg {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: #0a1633;
        opacity: 0.6;
      }
      video::-webkit-media-controls {
        display: none !important;
      }
    }

    &-box {
      display: flex;
      align-items: center;
      width: 1100px;
      height: 100vh;
      margin: 0 auto;

      &-left {
        margin: 0 100px 0 180px;
        position: relative;

        /// 手机盖
        > img { 
          width: 302px;
          height: 601px;
          z-index: 10; 
        }
      }


      .index-first-box-left-bg {
        position: absolute;
        width: 262px;
        z-index: -1;
        left: 20px;
        top: 18px;
        border-radius: 30px;
      }


      &-right {
        &-header {
          font-size: 40px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 20px;
        }
        &-des {
          font-size: 20px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 75px;
        }
        &-btn {
          display: flex;
          > div {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 50px;
            font-size: 15px;
            font-weight: 500;
            text-align: center;
            color: rgba(4, 16, 54, 1);
            background: rgba(255, 255, 255, 1);
            border-radius: 6px;
            margin-right: 15px;
            cursor: pointer;

            .icon {
              margin-right: 10px;
              font-size: 30px;
            }
            .qrcodes {
              position: absolute;
              top: 40px;
              left: 0;
              width: 150px;
              height: 150px;
              padding: 10px;
              border-radius: 0 0 6px 6px;
              background-color: #fff;
              opacity: 0;
              > img {
                width: 130px;
                height: 130px;
              }
            }
          }
          div:hover .qrcodes {
            opacity: 1;
          }
        }
      }
    }
  }

  // person net
  &-two {
    background: #f7f7f7;
    position: relative;
    &-box {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/personnet_top.png");
      background-size: 629px 122px;
      background-repeat: no-repeat;
      width: 1100px;
      height: 700px;
      margin: 52px auto 0 auto;

      &-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 230px 0 0;
        height: 100%;

        &-header {
          display: flex;
          align-items: center;
          font-size: 30px;
          font-weight: 500;
          color: #041036;
          margin-bottom: 30px;

          > img {
            width: 45px;
            height: 38px;
            margin-right: 20px;
          }
        }
        &-des {
          width: 450px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(98, 99, 107, 1);
          margin-bottom: 20px;
        }
        &-img {
          width: 116px;
          height: 145px;
          position: absolute;
          margin-left: 312px;
          bottom: 0;
        }
      }
      &-right {
        > img {
          width: 352px;
          height: 621px;
        }
      }
    }
  }

  /// data box
  &-three {
    &-box {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/databox_top.png");
      background-size: 702px 114px;
      background-repeat: no-repeat;
      background-position-x: right;
      width: 1100px;
      height: 700px;
      margin: 0 auto;

      &-left {
        margin-right: 85px;
        > img {
          width: 436px;
          height: 621px;
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 100%;

        &-header {
          display: flex;
          align-items: center;
          font-size: 30px;
          font-weight: 500;
          color: rgba(4, 16, 54, 1);
          margin-bottom: 30px;

          > img {
            width: 32px;
            height: 32px;
            margin-right: 20px;
          }
        }
        &-des {
          width: 450px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(98, 99, 107, 1);
          margin-bottom: 20px;
        }
      }
    }
  }

  /// chat session
  &-four {
    background: url('https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/session_chat_big_bg.png') no-repeat  center;
    background-size: 100% 100%;
    
    &-box {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/session_top.png");
      background-size: 466px 199px;
      background-repeat: no-repeat;
      width: 1100px;
      height: 700px;
      margin: 0 auto;

      &-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 172px 0 0;
        height: 100%;

        &-header {
          display: flex;
          align-items: center;
          font-size: 30px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 30px;

          > img {
            width: 37px;
            height: 37px;
            margin-right: 20px;
          }
        }
        &-des {
          width: 450px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 20px;
        }
        &-img {
          width: 192px;
          height: 192px;
        }
      }
      &-right {
        > img {
          width: 478px;
          height: 621px;
        }
      }
    }
  }

  /// wallet
  &-fives {
    background: rgba(255, 255, 255, 1);
    &-box {
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wallet_top.png");
      background-size: 531px 155px;
      background-repeat: no-repeat;
      background-position-x: right;
      width: 1100px;
      height: 700px;
      margin: 0 auto;

      &-left {
        margin-right: 86px;
        > img {
          width: 409px;
          height: 621px;
        }
      }

      &-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        &-header {
          display: flex;
          align-items: center;
          font-size: 30px;
          font-weight: 500;
          color: rgba(4, 16, 54, 1);
          margin-bottom: 30px;

          > img {
            width: 32px;
            height: 32px;
            margin-right: 20px;
          }
        }
        &-des {
          width: 450px;
          font-size: 18px;
          font-weight: 400;
          color: rgba(98, 99, 107, 1);
          margin-bottom: 20px;
        }
      }
    }
  }

  /// about
  &-six {
    background-color: rgba(247, 247, 247, 1);
    &-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1100px;
      height: 321px;
      margin: 0 auto;

      &-com {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > img {
          width: 50px;
          margin-bottom: 40px;
        }
        h1,
        h2,
        h3 {
          margin: 0;
        }
        h1 {
          font-size: 20px;
          font-weight: 500;
          color: rgba(4, 16, 54, 1);
          margin-bottom: 5px;
        }
        h2 {
          font-size: 16px;
          font-weight: 400;
          color: rgba(4, 16, 54, 1);
          margin-bottom: 8px;
        }
        h3 {
          font-size: 14px;
          font-weight: 400;
          color: rgba(173, 175, 186, 1);
          max-width: 227px;
          text-align: center;
        }
      }

      &-qrcodes {
        text-align: center;
        > img {
          width: 120px;
          height: 120px;
          margin-bottom: 16px;
        }
        h1 {
          font-size: 18px;
          font-weight: 600;
          color: rgba(4, 16, 54, 1);
        }
      }
    }
  }

  .googleplay {
    width: 50px;
    img {
      width: 22px;
      height: 24px;
    }
  }
}
</style>