import React from 'react';
import classNames from 'classnames';
import style from './index.scss';

export default class Footer extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={classNames(style.footer, className)}>
        <div className={style.footer_left}>
          <span>
             ©2019 NetCloth
          </span>
        </div>
        <div className={style.footer_right}>
          <div className={classNames(style.footer_icon, style.m)} />
          <div className={classNames(style.footer_icon, style.t)} />
          <div className={classNames(style.footer_icon, style.g)} />
        </div>
      </div>
    );
  }
}
