<!--
 * @Description:移动端首页
 * @Date: 2020-03-21 10:31:48
 * @Author: 黄龙
 * @LastEditors: 黄龙
 * @LastEditTime: 2020-03-27 14:02:21
 -->
<template>
  <div class="index">
    <Header></Header>

    <!-- video play -->
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

        <div class="index-first-box-top">
          <!-- <img src="@/assets/Wap/phone-silve.png" alt srcset /> -->

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


        <div class="index-first-box-bottom">
          <div class="index-first-box-bottom-header">NetCloth APP</div>
          <div class="index-first-box-bottom-des">{{$t('header.slogan')}}</div>
          
          <div class="index-first-box-bottom-btn">

            <div class="apple" @click="onIosDownload" >
              <Icon type="logo-apple" class="icon" />
              {{ $t('landingPage.ios') }}
            </div>

            <div class="android" @click="onAndroidDownload">
              <Icon type="logo-android" class="icon" />
               {{ $t('landingPage.android') }}
            </div>


          </div>
        </div>
      </div>
    </div>

    <!-- person net -->
    <div class="index-two">
      <div class="index-two-top">
        <div class="index-two-top-header">
          <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/personnet_ico.png" alt srcset />
          {{ $t('personnet.slogan') }}
        </div>
        <div class="index-two-top-des">{{ $t('personnet.desc1') }} {{ $t('personnet.desc2') }}</div>
      </div>
      <div class="index-two-bottom">
        <img :src="personnetBg" alt srcset />
      </div>
    </div>

    <!-- data box -->
    <div class="index-three">
      <div class="index-three-top">
        <div class="index-three-top-header">
          <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/databox_icon.png" alt srcset />
          {{ $t('databox.slogan') }}
        </div>
        <div class="index-three-top-des">{{ $t('databox.desc1') }}{{ $t('databox.desc2') }}</div>
      </div>
      <div class="index-three-bottom">
        <img :src="databoxBg" alt srcset />
      </div>
    </div>

    <!-- chat -->
    <div class="index-four">
      <div class="index-four-top">
        <div class="index-four-top-header">
          <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/session_icon.png" alt srcset />
          {{ $t('chat.slogan') }}
        </div>
        <div class="index-four-top-des">{{ $t('chat.desc1') }}{{ $t('chat.desc2') }}</div>
      </div>
      <div class="index-four-bottom">
        <img :src="sessionBg" alt srcset />
      </div>
    </div>

    <!-- wallet -->
    <div class="index-fives">
      <div class="index-fives-top">
        <div class="index-fives-top-header">
          <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/wallet_icon.png" alt srcset />
          {{ $t('wallet.slogan') }}
        </div>
        <div class="index-fives-top-des">{{ $t('wallet.desc1') }}{{ $t('wallet.desc2') }}</div>
      </div>
      <div class="index-fives-bottom">
        <img :src="walletBg" alt srcset />
      </div>
    </div>

    <!-- about -->
    <div class="index-six">
      <div class="index-six-com">
         <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_business.png" alt srcset />
          <h1>{{ $t('about.business') }}</h1>
          <h2>contact@netcloth.org</h2>
          <h3>{{ $t('about.businessDesc') }}</h3>
      </div>
      <div class="index-six-com">
        <img src="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_costom_service.png" alt srcset />
          <h1>{{ $t('about.customServer') }}</h1>
          <h2>contact@netcloth.org</h2>
          <h3>{{ $t('about.customServerDesc') }}</h3>
      </div>
      <div class="index-six-qrcodes">
        <img :src="aboutGroupImg" alt srcset />
          <h1>{{ $t('about.officialGroup') }}</h1>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Wap/Header/Index.vue";
import Footer from "@/components/Wap/Footer/Index.vue";
import { Icon } from "view-design";

export default {
  name: "Index",
  components: {
    Header,
    Footer,
    Icon
  },

  computed: {

    aboutGroupImg: function() {
      console.log("get img");
      return this.$store.state.language === "zh"
        ? ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_community_cn.png")
        : ("https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.4.5/src/assets/pc2/about_community_en.png");
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
  },

  methods: {

    onIosDownload() {
      window.open('https://apps.apple.com/cn/app/netcloth/id1481045375','_blank')
    },

    onAndroidDownload() {
      if (this.$store.state.language === "zh") {
        window.open('http://47.52.103.194/netcloth1.3.0.apk','_self')
      }
      else {
        window.open('https://play.google.com/store/apps/details?id=com.netcloth.chat','_self')
      }
    }

  }

};
</script>

<style lang='scss' scoped>
.index {
  font-family: PingFangSC-Medium, PingFang SC;
  overflow-x: hidden;

  &-first {
    position: relative;
    &-video {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      top: 0;
      z-index: -1;

      &-bg {
        position: absolute;
        left: -1900px;
        height: 100%;
        object-fit: fill;
        z-index: -1;
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
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100vh;

      &-top {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 452px;
        position: relative;

        > img {
          width: 811px;
          height: 1617px;
          z-index: 10;
          object-fit: contain;
        }
      }

      .index-first-box-left-bg {
        position: absolute;
        width: 750px;
        height: 1550px;
        z-index: -1;
        left: auto;
        right: auto;
        top: 50px;
        border-radius: 60px;
        object-fit: contain;
      }
      video::-webkit-media-controls {
        display: none !important;
      }


      &-bottom {
        margin: 170px 0;
        text-align: center;

        &-header {
          font-size: 99px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 45px;
        }

        &-des {
          font-size: 63px;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          margin-bottom: 101px;
        }
        &-btn {
          display: flex;
          justify-content: center;
          > div {
            width: 672px;
            height: 202px;
            line-height: 202px;
            font-size: 67px;
            font-weight: 500;
            border-radius: 22px;
          }
          i {
            font-size: 95px;
            margin-right: 56px;
          }

          .apple {
            color: rgba(70, 94, 255, 1);
            border: 4px solid rgba(70, 94, 255, 1);
            margin-right: 67px;
          }

          .android {
            color: rgba(255, 255, 255, 1);
            background: rgba(70, 94, 255, 1);
          }
        }
      }
    }
  }

  /// person net
  &-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/pc2/personnet_top.png");
    background-size: 1258px 244px;
    background-repeat: no-repeat;
    height: 3304px;

    &-top {
      margin-bottom: 100px;
      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 90px;
        font-weight: 500;
        color: rgba(4, 16, 54, 1);
        margin-bottom: 60px;

        > img {
          width: 101px;
          height: 101px;
          margin-right: 38px;
          object-fit: contain;
        }
      }
      &-des {
        width: 1546px;
        font-size: 63px;
        font-weight: 300;
        color: rgba(98, 99, 107, 1);
        line-height: 94px;
        text-align: center;
      }
    }
    &-bottom {
      > img {
        width: 1474px;
        height: 2184px;
        object-fit: contain;
      }
    }
  }

  /// data box
  &-three {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(247, 247, 247, 1);
    background-image: url("../../assets/pc2/databox_top.png");
    background-size: 1404px 228px;
    background-repeat: no-repeat;
    background-position-x: right;
    height: 2625px;

    position: relative;

    &-top {
      margin-top: 269px;
      margin-bottom: 10px;
      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 90px;
        font-weight: 500;
        color: rgba(4, 16, 54, 1);
        margin-bottom: 60px;

        > img {
          width: 81px;
          height: 89px;
          margin-right: 45px;
          object-fit: contain;
        }
      }
      &-des {
        width: 1546px;
        font-size: 63px;
        font-weight: 300;
        color: rgba(98, 99, 107, 1);
        line-height: 94px;
        text-align: center;
      }
    }
    &-bottom {
      > img {
        width: 1154px;
        height: 1837px;
        object-fit: contain;
      }
      position: absolute;
      left: auto;
      right: auto;
      bottom: -160px;
    }
  }

  ///chat
  &-four {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    height: 2719px;
    background: url('../../assets/pc2/session_chat_big_bg.png') no-repeat  center;
    background-size: cover;

    &::after  {
      position: absolute;
      z-index: 1000;
      top: 0;
      left: 0;
      background-image: url('../../assets/pc2/session_top.png');
      background-size: cover;
      width: 932px;
      height: 398px;
      content: '';
    }
    
    
    

    &-top {
      margin-bottom: 94px;
      margin-top: 0;

      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 90px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 90px;

        > img {
          width: 78px;
          height: 85px;
          margin-right: 45px;
          object-fit: contain;
        }
      }

      &-des {
        width: 1546px;
        font-size: 63px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 94px;
        text-align: center;
      }
    }
    &-bottom {
      > img {
        width: 1443px;
        height: 1837px;
      }
    }
  }

  /// wallet
  &-fives {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    background-image: url("../../assets/pc2/wallet_top.png");
    background-size: 1062px 320px;
    background-repeat: no-repeat;
    background-position-x: right;
    height: 2719px;

    &-top {
      margin-top: 269px;
      margin-bottom: 94px;

      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 90px;
        font-weight: 500;
        color: rgba(4, 16, 54, 1);
        margin-bottom: 90px;

        > img {
          width: 105px;
          height: 105px;
          margin-right: 34px;
          object-fit: contain;
        }
      }
      &-des {
        width: 1546px;
        font-size: 63px;
        font-weight: 300;
        color: rgba(98, 99, 107, 1);
        line-height: 94px;
        text-align: center;
      }
    }
    &-bottom {
      > img {
        width: 818px;
        height: 1242px;
      }
    }
  }
  &-six {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 3358px;
    padding: 269px 0;
    background-color: rgba(247, 247, 247, 1);

    &-com {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 269px;
      text-align: center;

      > img {
        width: 168px;
        margin-bottom: 112px;
      }

      h1 {
        font-size: 90px;
        font-weight: 500;
        color: rgba(4, 16, 54, 1);
        margin-bottom: 22px;
      }

      h2 {
        font-size: 76px;
        font-weight: 400;
        color: rgba(4, 16, 54, 1);
        margin-bottom: 112px;
      }
      h3 {
        font-size: 67px;
        font-weight: 400;
        color: rgba(173, 175, 186, 1);
      }
    }
    &-qrcodes {
      text-align: center;
      > img {
        width: 672px;
        height: 672px;
        margin-bottom: 67px;
      }
      h1 {
        font-size: 90px;
        font-weight: 600;
        color: rgba(4, 16, 54, 1);
      }
    }
  }
}
</style>