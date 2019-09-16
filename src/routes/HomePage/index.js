import React from 'react';
import PcHomePage from './pc';
import { Desktop, Mobile } from 'components/Layout';
import H5HomePage from './h5';

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <PcHomePage />
        </Desktop>
        <Mobile>
          <H5HomePage />
        </Mobile>
      </React.Fragment>
    );
  }
}
