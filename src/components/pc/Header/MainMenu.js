import React from 'react';
import { Menu } from 'antd';
import withLocal from 'components/withLocal';
import { _t } from 'utils/lang';
import { Link } from 'dva/router'
import connectWithRouter from 'utils/connectWithRouter';
import style from './style.less';


@withLocal()
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: this.getActiveKey(),
    };
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
  }
  
  handleScroll = () => {
    const { location: { pathname } } = this.props;
    if (pathname === '/') {
      const applicationEle = document.getElementById('application');
      const faqEle = document.getElementById('faq');
      const downEle = document.getElementById('down');
      const aELeRect = applicationEle.getBoundingClientRect();
      const faqEleRect = faqEle.getBoundingClientRect();
      const downEleRect = downEle.getBoundingClientRect();
      if(aELeRect.top < 100 && downEleRect.top > 140) {
        this.setState({
          selectedKeys: ['introduce'],
        })
      } else if (downEleRect.top < 100 && faqEleRect.top > 140) {
        this.setState({
          selectedKeys: ['download'],
        })
      } else {
        this.setState({
          selectedKeys: ['homepage'],
        })
      }
    }
  };
  
  getActiveKey = () => {
    const { location: { pathname } } = this.props;
    if(pathname === '/') {
      return ['homepage'];
    }
    if (pathname === '/faq') {
      return  ['faq'];
    }
    return  [];
  };
  
  handleAppClick = (top) => {
    document.body.scrollTop = top;
    document.documentElement.scrollTop = top;
  };
  

  render() {
    const { selectedKeys } = this.state;
    const { location: { pathname } } = this.props;
    return (
      <Menu
        mode="horizontal"
        className={style.main_menu}
        selectedKeys={selectedKeys}
      >
        <Menu.Item key="homepage">
          {
            pathname !== '/' ? (
              <Link to="/">{_t('header.menu.home')}</Link>
            ): (
              <a
                onClick={() => {
                  this.handleAppClick(0);
                }}
              >
                {_t('header.menu.home')}
              </a>
            )
          }
        </Menu.Item>
        <Menu.Item key="introduce">
          {
            pathname !== '/' ? (
              <Link to="/">
                {_t('header.menu.application')}
              </Link>
            ) : (
              <a
                onClick={() => {
                  const applicationEle = document.getElementById('application');
                  const top = applicationEle.offsetTop;
                  this.handleAppClick(top);
                }}
              >
                {_t('header.menu.application')}
              </a>
            )
          }
        </Menu.Item>
        <Menu.Item key="download">
          {
            pathname !== '/' ? (
              <Link to="/">{_t('header.menu.download')}</Link>
            ) : (
              <a
                onClick={() => {
                  const downEle = document.getElementById('down');
                  const top = downEle.offsetTop;
                  this.handleAppClick(top);
                }}
              >
                {_t('header.menu.download')}
              </a>
            )
          }
        </Menu.Item>
        <Menu.Item key="faq">
          <a href="https://netcloth.zendesk.com" target="_blank">{_t('header.menu.faq')}</a>
        </Menu.Item>
        <Menu.Item key="plan">
          <a href="https://netcloth.zendesk.com" target="_blank">{_t('header.menu.main')}</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default connectWithRouter()(MainMenu)
