import React from 'react';
import classNames from 'classnames';
import style from './index.scss';
import { _t } from '../../../utils/lang'

export default class Footer extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames(style.footer, className)}>
        <div className={style.footer_top}>
          <div className={style.footer_left}>
            <span>
              ©2019 NetCloth
          </span>
          </div>
          <div className={style.footer_right}>
            <div className={classNames(style.footer_icon, style.m)} >
              {this.handleClick("https://medium.com/@NetCloth")}
            </div>
            <div className={classNames(style.footer_icon, style.t)} >
              {this.handleClick("https://twitter.com/NetCloth")}
            </div>
            <div className={classNames(style.footer_icon, style.g)} >
              {this.handleClick("https://github.com/netcloth")}
            </div>
            <div className={classNames(style.footer_icon, style.b)} >
              {this.handleClick("https://blog.netcloth.org")}
            </div>
          </div>
        </div>
        <div className={style.footer_bottom}>
          <a href={_t('service_protocol.url')} target="_blank" rel="noopener noreferrer">
            {_t('service_protocol')}
          </a>
          <a href={_t('privacy_protocol.url')} target="_blank" rel="noopener noreferrer">
            {_t('privacy_protocol')}
          </a>
        </div>
      </div>
    );
  };


  handleClick = (url) => {

    return (<a href={url} target="_blank" className={`${style.click}`}></a>)

    // window.location.href = url
  }
}
