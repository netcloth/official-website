import React from 'react';
import style from './style.scss';
import { _t } from "utils/lang";
import withLocal from 'components/withLocal';
import { applications } from "config/base";
import classNames from "classnames";

@withLocal()
export default class Application extends React.Component {
  render() {
    const { title = 'application.title', currentLocale } = this.props;
    return (
      <div className={style.application_box}>
        {
          title ? <p className={style.title}>{_t(title)}</p> : null
        }
        <div className={style.content}>
          {
            applications.map((item, key) => {
              const { cls, title, content } = item;
              return (
                <div className={classNames(style.content_item, style[currentLocale])} key={key}>
                  <div>
                    <span className={classNames(style.content_icon, style[cls])} />
                    <p className={style.item_title}>
                      {_t(title)}
                    </p>
                    <p className={style.item_content}>
                      {_t(content)}
                    </p>
                  </div>
                  <div className={classNames(style.corner, style.corner1)} />
                  <div className={classNames(style.corner, style.corner2)} />
                  <div className={classNames(style.corner, style.corner3)} />
                  <div className={classNames(style.corner, style.corner4)} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
