import React from "react";
import style from './style.less';

export default class AppFooter extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.footer_content}>
          <div className={style.footer_left}>
            <span>
             ©2019 NetCloth
            </span>
          </div>
          <div className={style.footer_right}>
            <div className={`${style.footer_icon} ${style.medium}`} />
            <div className={`${style.footer_icon} ${style.twier}`} />
            <div className={`${style.footer_icon} ${style.github}`} />
          </div>
        </div>
      </div>
    );
  }
}
