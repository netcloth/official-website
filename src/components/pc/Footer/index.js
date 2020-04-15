import React from "react";
import style from './style.less';
import { _t } from '../../../utils/lang'

export default class AppFooter extends React.Component {

  render() {
    return (
      <div className={style.footer}>
        <div className={style.footer_content}>
          <div className={style.footer_left}>
            <span>
              ©2019 NetCloth
            </span>
            <a href={_t('service_protocol.url')} target="_blank" rel="noopener noreferrer">
              {_t('service_protocol')}
            </a>
            <a href={_t('privacy_protocol.url')} target="_blank" rel="noopener noreferrer">
              {_t('privacy_protocol')}
            </a>
          </div>
          <div className={style.footer_right}>
            <div className={`${style.footer_icon} ${style.medium}`} >
              {this.handleClick("https://medium.com/@NetCloth")}
            </div>
            <div className={`${style.footer_icon} ${style.twier}`} >
              {this.handleClick("https://twitter.com/NetCloth")}
            </div>
            <div className={`${style.footer_icon} ${style.github}`}>
              {this.handleClick("https://github.com/netcloth")}
            </div>

            <div className={`${style.footer_icon} ${style.blog}`}>
              {this.handleClick("https://blog.netcloth.org")}
            </div>

          </div>

        </div>
      </div>
    );
  };

  handleClick = (url) => {

    return (<a href={url} target="_blank" className={`${style.click}`}></a>)

    // window.location.href = url
  }

}
