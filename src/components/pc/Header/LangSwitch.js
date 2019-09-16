import React from 'react';
import { connect } from 'dva';
import style from './style.less';


const iconConfig = {
  en_US: {
    text: '中文',
    key: 'zh_CN',
  },
  zh_CN: {
    text: 'En',
    key: 'en_US',
  },
};

class LangSwitch extends React.Component {
  handleSwitchLang = (key) => {
    this.props.dispatch({
      type: 'app/setLang',
      payload: {
        lang: key,
      },
    });
  };
  render() {
    const { currentLocale } = this.props;
    const { text, key } = iconConfig[currentLocale];
    return (
      <div
        className={style.lang_switch}
        key={key}
        onClick={() => {
          this.handleSwitchLang(key);
        }}
      >
        <span>{text}</span>
      </div>
    );
  }
}

export default connect((state) => {
  const { currentLocale } = state.app;
  return {
    currentLocale,
  }
})(LangSwitch)
