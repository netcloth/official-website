import React from 'react';
import { Link } from 'dva/router';
import Header from 'components/h5/header';
import withLocal from 'components/withLocal';
import redictToHome from 'components/redictToHome';
import { _t } from 'utils/lang';
import Application from 'components/h5/Application';
import style from './index.scss';

@redictToHome()
@withLocal()
class DownLoad extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  

  render() {
    return (
      <div className={style.container}>
        <Header node={this.myRef} />
        <div className={style.top_box} ref={this.myRef}>
          <div>
            <span className={style.icon} />
            <p className={style.title}>NetCloth</p>
            <p className={style.tips}>{_t('tips')}</p>
          </div>
        </div>
        <Application title={null} />
        {/* for place holder height */}
        <div className={style.place_holder}></div>
        <div className={style.download_box}>
          {this.renderDownload()}
        </div >
      </div >
    );
  }

  renderDownload() {
    if (this.checkAngent()) {
      //android
      return (
        <a href="https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.1.3/src/assets/netcloth1.0.2.apk" download="netcloth-v1.0.2.apk">{_t('download.local')}</a>
      )
    } else {
      return (
        <Link to="install">{_t('download.local')}</Link>
      )
    }
  }

  checkAngent() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    console.log(isAndroid)
    console.log(isiOS)
    if (isAndroid) {
      return true
    } else {
      return false
    }
  }
}

export default DownLoad;
