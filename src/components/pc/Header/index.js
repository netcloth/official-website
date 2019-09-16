import React from "react";
import { Layout } from 'antd';
import { Link } from 'dva/router';
import withLocal from 'components/withLocal';
import classNames from 'classnames';
import MainMenu from './MainMenu';
import LangSwitch from './LangSwitch';
import style from './style.less';

@withLocal()
export default class AppHeader extends React.Component {
  static defaultProps = {
    diff: 0,
  };
  state = {
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
    const { node, diff } = this.props;
    if (node && node.current) {
      const offset = node.current.getBoundingClientRect();
      const { height } = offset;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let over = false;
      if (scrollTop >= (height - diff)) {
        over = true;
      }
      this.setState({
        over,
      })
    }
  };

  render() {
    const { over } = this.state;
    const headerCls = classNames({
      [style.header]: true,
      [style.over]: over,
    });
    return (
      <Layout.Header className={style.layout_header}>
        <div className={headerCls}>
          <div className={style.headerC}>
            <div className={style.header_content}>
              <div className={style.header_left}>
                <Link to="/" className={style.logo} />
                <MainMenu />
              </div>
              <div className={style.header_right}>
                <LangSwitch />
              </div>
            </div>
          </div>
        </div>
      </Layout.Header>
    );
  }
}
