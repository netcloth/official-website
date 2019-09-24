import React from 'react';
import { connect } from 'dva';
import redictToHome from 'components/redictToHome';
import withLocal from 'components/withLocal';
import Header from 'components/h5/header';
import classNames from 'classnames';
import style from './style.scss';

@redictToHome()
@withLocal()
@connect(state => {
  const { currentLocale } = state.app;
  return {
    currentLocale,
  }
})
class Install extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    const { currentLocale } = this.props;
    return (
      <div className={style.container}>
        <Header node={this.myRef} />
        <div className={style.top_box} ref={this.myRef}>
          <span className={style.icon} />
          <p className={style.title}>NetCloth</p>
          <p className={style.tips}>一个保护隐私的点对点即时通讯APP</p>
          <a  href="https://ff.68qipai.com/app.php/MjI4OQ==" className={style.try_btn}>
            立即试用
          </a>


        </div>
        <div className={style.content_box}>
          <div className={style.tips}>
            <p>安装完成后，请到：</p>
            <p>设置】-【通用】-【设备管理】找到NetCloth APP 的描述文件“DADU RIVER HYDROPOWER”，设置 为信任。</p>
          </div>
          <div className={style.content}>
            {
              Array(...Array(5)).map((item, idx) => {
                return (
                  <div className={classNames(style.content_item, style[`${currentLocale}_${idx + 1}`])} />
                );
              })
            }
            <p>设置完成后，就可以使用了。</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Install;
