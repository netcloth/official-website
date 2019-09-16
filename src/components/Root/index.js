import React from "react";
import { withRouter } from 'dva/router';
import { connect } from 'dva'

class Root extends React.Component {
  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  
  render() {
    const { children, langReady } = this.props;
    if (!langReady) {
      return null;
    }
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}


export default withRouter(connect(state => {
  const { langReady } = state.app;
  return {
    langReady,
  }
})(Root));
