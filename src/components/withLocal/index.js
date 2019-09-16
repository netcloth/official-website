import React from 'react';
import { connect } from 'dva';


export default () => (Component) => {
  @connect((state) => {
    const { currentLocale } = state.app;
    return {
      currentLocale,
    }
  })
  class Wrap extends React.Component {
    render() {
      
      return <Component {...this.props}/>
    }
  }
  return Wrap;
}
