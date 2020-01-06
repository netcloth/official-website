import React from 'react';
import { _t } from 'utils/lang';
import { Link } from 'dva/router';
import classNames from 'classnames';
import connectWithRouter from 'utils/connectWithRouter';
import MenuIcon from './MenuIcon';
import style from './style.scss';
const openMenu = 'https://cdn.jsdelivr.net/gh/netcloth/official-website@v0.2.6/src/assets/menu.png';


const iconConfig = {
  en_US: {
    text: '中文',
    key: 'zh_CN',
  },
  zh_CN: {
    text: 'EN',
    key: 'en_US',
  },
};

@connectWithRouter((state) => {
  const { currentLocale } = state.app;
  return {
    currentLocale,
  };
})
class Header extends React.Component {
  state = {
    showMenu: false,
    over: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    const { node } = this.props;
    if (node && node.current) {
      const offset = node.current.getBoundingClientRect();
      const { height } = offset;
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let over = false;
      if (scrollTop > height) {
        over = true;
      }
      this.setState({
        over,
      })
    }
  };
  
  handleLangSwitch = (key) => {
    this.props.dispatch({
      type: 'app/setLang',
      payload: {
        lang: key,
      },
    });
  };
  toggleMenu = (showMenu) => {
    this.setState({
      showMenu,
    })
  };
  render() {
    const { showMenu, over } = this.state;
    const { currentLocale, location: { pathname } } = this.props;
    const config = iconConfig[currentLocale];
    const menuCls = classNames({
      [style.menu_con]: true,
      [style.hide]: !showMenu,
    });
    const headerCls = classNames({
      [style.header]: true,
      [style.over]: over,
    });
    const isShowMenu = pathname === '/' || pathname === '/faq';
    return (
      <React.Fragment>
        <div className={headerCls}>
          <div className={style.header_c}>
            {
              isShowMenu ? (
                <div
                  className={style.open_menu}
                  onClick={() => {
                    this.toggleMenu(true);
                  }}
                >
                  <MenuIcon over={over} />
                </div>
              ) : null
            }
            <Link to="/" className={style.header_logo} />
            <p
              className={style.lang_switch}
              onClick={() => {
                this.handleLangSwitch(config.key);
              }}
            >
              <span>{config.text}</span>
            </p>
          </div>
          <div className={menuCls}>
            <div className={style.menu_content}>
              <img
                src={openMenu}
                alt=""
                onClick={() => {
                  this.toggleMenu(false);
                }}
              />
              <a href="https://www.netcloth.org/" >{_t('header.menu.main')}</a>
              <Link to="/faq">{_t('header.menu.faq')}</Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
