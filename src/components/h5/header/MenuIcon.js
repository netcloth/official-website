import React from 'react';
import classNames from 'classnames';
import style from './menuIcon.scss';


export default class MenuIcon extends React.Component {
  render() {
    const { over } = this.props;
    const cls = classNames({
      [style.menu_box]: true,
      [style.over]: over,
    });
    return (
      <div className={cls}>
        <div className={style.menu} />
        <div className={style.menu} />
        <div className={style.menu} />
      </div>
    );
  }
}
