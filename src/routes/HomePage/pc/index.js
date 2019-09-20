import React from 'react';
import _ from 'lodash';
import { Layout, Input, Icon, Popover } from 'antd';
import { Link } from 'dva/router';
import withLocal from 'components/withLocal';
import { _t } from 'utils/lang';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import Header from 'components/pc/Header';
import Footer from 'components/pc/Footer';
import DownLoadSwiper from "./DownLoadSwiper";
import { faqs, applications, swiper_left, swiper_right } from 'config/base';
import style from './style.less';
const logo = 'https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.0.6/src/assets/logo.png';

@withLocal()
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoKey: 'offline',
    };
    this.myRef = React.createRef();
    this.downLoad = React.createRef();
  }
  infos = {
    offline: {
      cls: 'offlineIcon',
      className: 'offline',
      title: 'feature.offline.title',
      content: 'feature.offline.content',
    },
    local: {
      cls: 'localIcon',
      className: 'local',
      title: 'feature.local.title',
      content: 'feature.local.content',
    },
    data: {
      cls: 'dataIcon',
      className: 'data',
      title: 'feature.data.title',
      content: 'feature.data.content',
    },
    message: {
      cls: 'messageIcon',
      className: 'message',
      title: 'feature.message.title',
      content: 'feature.message.content',
    },
  };
  mouseHandle = (key) => {
    this.setState({
      infoKey: key,
    })
  };
  renderInfo = () => {
    const { infoKey } = this.state;
    return _.map(this.infos, (item, key) => {
      const { className, title } = item;
      const activeCls = infoKey === key ? style[`${key}_active`] : null;
      return (
        <div
          key={key}
          className={classNames(style.item, style[className], activeCls)}
          onMouseEnter={(e) => {
            e && e.preventDefault();
            this.mouseHandle(key)
          }}
          onMouseLeave={(e) => {
            e && e.preventDefault();
            this.mouseHandle('offline')
          }}
        >
          <p className={style.icon} />
          <p className={style.text}>
            {_t(title)}
          </p>
        </div>
      );
    });
  };
  renderInfoContent = () => {
    const { infoKey } = this.state;
    const { title, content, cls } = this.infos[infoKey];
    return (
      <div key={infoKey} className={style.info_content}>
        <p>
          <span className={style[cls]} />
          <span>{_t(title)}</span>
        </p>
        <p>
          {_t(content)}
        </p>
      </div>
    );
  };
  params_left = {
    direction: 'vertical',
    slidesPerView: 5,
    autoHeight: true,
    centeredSlides: true,
    initialSlide: 0,
    on: {
      slideChangeTransitionEnd: () => {
        this.handleSlideLeftChange();
      },
    }
  };

  params_right = {
    direction: 'vertical',
    slidesPerView: 1.3,
    autoHeight: true,
    centeredSlides: true,
    initialSlide: 0,
    on: {
      slideChangeTransitionEnd: () => {
        this.handleSlideRightChange();
      },
    }
  };

  handleSlideLeftChange = () => {
    const { activeIndex } = this.swiperLeftInstance;
    this.swiperRightInstance.slideTo(activeIndex);
  };

  handleSlideRightChange = () => {
    const { activeIndex } = this.swiperRightInstance;
    this.swiperLeftInstance.slideTo(activeIndex);
  };

  updateleftSwiper = (swiperInstance) => {
    this.swiperLeftInstance = swiperInstance;
  };

  updateRightSwiper = (swiperInstance) => {
    this.swiperRightInstance = swiperInstance;
  };
  handleClick = () => {
    const offset = this.downLoad.current.getBoundingClientRect();
    const { top } = offset;
    document.body.scrollTop = top;
    document.documentElement.scrollTop = top;
  };

  handleLeftSwitch = (next) => {
    if (next) {
      this.swiperLeftInstance.slideNext();
    } else {
      this.swiperLeftInstance.slidePrev();
    }
  };
  render() {
    const { currentLocale } = this.props;
    return (
      <Layout className={style.layout_wrapper}>
        <Header node={this.myRef} diff={50} />
        <Layout.Content className={style.layout_content}>
          <div className={style.homepage}>
            <section className={style.top_box} ref={this.myRef}>
              <div className={style.content}>
                <img src={logo} alt="" />
                <p className={style.title}>NetCloth</p>
                <p className={classNames(style.tips, style[currentLocale])}>{_t('tips')}</p>
                <a className={style.btn} onClick={this.handleClick}>{_t('try.btn')}</a>
                <div className={style.more}>
                  <p className={style.mouse}>
                    <span className={style.dot} />
                  </p>
                  <p className={style.more_text}>
                    {_t('more.btn')}
                  </p>
                </div>
              </div>
            </section>
            <section className={style.application_box} id="application" >
              <div className={style.application_wrapper}>
                <p className={style.title}>{_t('application.title')}</p>
                <div className={style.content}>
                  {
                    applications.map((item, idx) => {
                      return (
                        <div className={classNames(style.item, style[item.cls], style[currentLocale])} key={idx}>
                          <p className={style.item_icon} />
                          <p className={style.item_title}>
                            {_t(item.title)}
                          </p>
                          <p className={style.item_content}>
                            {_t(item.content)}
                          </p>
                          {
                            Array(...Array(4)).map((item, idx) => {
                              return (
                                <div className={classNames(style.corner, style[`corner_${idx + 1}`])} />
                              );
                            })
                          }
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            </section>
            <section className={style.info_box}>
              <div className={style.info_wrapper}>
                <p className={style.title}>{_t('feature.title')}</p>
                <div className={style.content}>
                  <div className={style.content_left}>
                    {this.renderInfo()}
                  </div>
                  <div className={style.content_right}>
                    {this.renderInfoContent()}
                  </div>
                </div>
              </div>
            </section>
            <section className={style.swiper_box}>
              <div className={style.swiper_wrapper}>
                <div className={style.swiper_left}>
                  <div className={style.active_item}>
                    <i className={classNames(style.line, style[currentLocale])} />
                    <i className={style.symbol} />
                    <i
                      className={classNames(style.up, style[currentLocale])}
                      onClick={() => {
                        this.handleLeftSwitch(true);
                      }}
                    />
                    <i
                      onClick={() => {
                        this.handleLeftSwitch(false);
                      }}
                      className={classNames(style.down, style[currentLocale])}
                    />
                  </div>
                  <div className={style.left_content}>
                    <Swiper {...this.params_left} getSwiper={this.updateleftSwiper}>
                      {
                        swiper_left.map((item, idx) => {
                          return (
                            <div key={idx}>
                              <div className={style.content_wrapper}>
                                <div className={style.year}>
                                  {_t(item.title)}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      }
                    </Swiper>
                  </div>
                </div>
                <div className={style.swiper_right}>
                  <div className={style.right_content}>
                    <p className={style.title}>我们与传统IM软件的差异点</p>
                    <Swiper {...this.params_right} getSwiper={this.updateRightSwiper}>
                      {
                        swiper_right.map((item, idx) => {
                          return (
                            <div key={idx}>
                              <div className={style.slide_content}>
                                <div className={style.im_wrapper}>
                                  <div>
                                    <p>{_t('swiper.im')}</p>
                                    <p>{_t(item.im)}</p>
                                  </div>
                                  <i className={style.im_icon} />
                                </div>
                                <div className={style.now_wrapper}>
                                  <div>
                                    <p>NetCloth</p>
                                    <p>{_t(item.now)}</p>
                                  </div>
                                  <i className={style.now_icon} />
                                </div>
                              </div>
                            </div>
                          );
                        })
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
            </section>
            <section className={style.down_load_box} id="down" ref={this.downLoad}>
              <div className={style.content}>
                <div className={style.content_left}>
                  <DownLoadSwiper />
                </div>
                <div className={style.content_right}>
                  <div>
                    <p className={style.title}>{_t('down.title')}</p>
                    <p className={style.tip}>{_t('down.tips1')}</p>
                    <p className={style.tip}>{_t('down.tips2')}</p>
                    <div className={style.down_icon}>
                      <Popover
                        getPopupContainer={() => document.getElementById('apple')}
                        placement="bottom"
                        content={(
                          <div className={style.down_apple}>
                            <div className={style.down_pop}>
                              <div className={style.down_pop_right}>
                                <p className={style.ios_qrd} />
                                <span>扫描下APP</span>
                              </div>
                            </div>
                          </div>
                        )}
                      >
                        <div className={style.apple} id="apple" />
                      </Popover>
                      <Popover
                        getPopupContainer={() => document.getElementById('and')}
                        placement="bottom"
                        content={(
                          <div className={style.down_apple}>
                            <div className={style.down_pop}>
                              <div className={style.down_pop_left}>
                                <p className={style.and_apk}>
                                  <span />
                                </p>
                                <a href="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.0.6/src/assets/netcloth0.2.0.apk" download="netcloth-v0.2.0.apk">点击下载</a>
                              </div>
                              <div className={style.down_pop_right}>
                                <p className={style.and_qrd} />
                                <span>扫描下APP</span>
                              </div>
                            </div>
                          </div>
                        )}
                      >
                        <div className={style.and} id="and" />
                      </Popover>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={style.faq_box} id="faq">
              <div className={style.faq_wrapper}>
                <p className={style.faq_icon} />
                <p className={style.title}>{_t('faq.faq')}</p>
                <div className={style.content}>
                  {
                    _.map(faqs.slice(0, 6), (item) => {
                      return (
                        <Link
                          to="/faq"
                          className={style.content_item}
                        >
                          <span>{_t(item.text)}</span>
                        </Link>
                      );
                    })
                  }
                </div>
                <p className={style.faq_more}>
                  <Link to="/faq">{_t('faq.more')} ></Link>
                </p>
              </div>
            </section>
            <section className={style.subscription_box}>
              <div className={style.subscription_content}>
                <div className={style.subscription_title}>
                  <p>订阅</p>
                  <p>
                    第一时间了解项目进度
                  </p>
                </div>
                <p className={style.subscription_input}>
                  <Input placeholder="请输入您的邮箱地址" />
                  <a>确定订阅</a>
                </p>
              </div>
            </section>
          </div>
        </Layout.Content>
        <Layout.Footer className={style.layout_footer}>
          <Footer />
        </Layout.Footer>
      </Layout>
    );
  }
}
