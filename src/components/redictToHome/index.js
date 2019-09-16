import React from 'react';
import { Redirect, routerRedux } from 'dva/router';
import connectWithRouter from 'utils/connectWithRouter';

export default () => (Component) => {
  @connectWithRouter()
  class Wrapper extends React.Component {
    componentDidMount() {
      window.addEventListener('resize', this.HandleResize, false);
    }
  
    HandleResize = () => {
      const { location: { pathname }, dispatch } = this.props;
      const width = window.innerWidth;
      if ((pathname === '/download' || pathname === '/install') && width > 750) {
        dispatch(routerRedux.replace('/'));
      }
    };
    
    render() {
      const { location: { pathname } } = this.props;
      const width = window.innerWidth;
      if ((pathname === '/download' || pathname === '/install') && width > 750) {
        return <Redirect to="/" />
      }
      return <Component {...this.props} />
    }
  }
  return Wrapper;
}
