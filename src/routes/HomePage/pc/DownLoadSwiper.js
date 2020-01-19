import React from 'react';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/lib/styles/css/swiper.css';
import { Progress } from 'antd'
import style from './style.less';
const phone1 = 'https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.2.7/src/assets/phone_1.png';
const phone2 = 'https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.2.7/src/assets/phone_2.png';
const phone3 = 'https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.2.7/src/assets/phone_3.png';
const phone4 = 'https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.2.7/src/assets/phone_4.png';



export default class DownLoadSwiper extends React.Component {
  state = {
    active: 1,
  };
  config = [
    phone1,
    phone2,
    phone3,
    phone4,
  ];
  handleSlideChange = () => {
    const { activeIndex } = this.swiperInstance;
    this.setState({
      active: activeIndex + 1,
    })
  };
  
  updateSwiper = (swiperInstance) => {
    this.swiperInstance = swiperInstance;
  };
  params = {
    initialSlide: 0,
    autoplay: true,
    delay: 5000,
    effect: 'flip',
    fadeEffect: true,
    on: {
      slideChange: () => {
        this.handleSlideChange();
      },
    },
  };
  
  render() {
    const { active } = this.state;
    const percent = 25 * active;
    return (
      <div className={style.down_load_progress}>
        <Progress
          percent={percent}
          type="circle"
          width={710}
          status="normal"
          strokeWidth={0.2}
          strokeColor="rgba(56,96,244,1)"
        />
        <div className={style.swiper}>
          <div className={style.swiper_content}>
            <Swiper {...this.params} getSwiper={this.updateSwiper} >
              {
                this.config.map((item, key) => {
                  return (
                    <div key={key} className={style.swiper_item}>
                      <img src={item} alt=""/>
                    </div>
                  );
                })
              }
            </Swiper>
          </div>
        </div>
        {
          Array(...Array(4)).map((item, idx) => {
            const cls = classNames({
              [style.circle]: true,
              [style[`circle_${idx + 1}`]]: true,
              [style.active]: active === idx + 1,
            });
            return (
              <div className={cls}>
                {idx + 1}
              </div>
            );
          })
        }
      </div>
    );
  }
}
