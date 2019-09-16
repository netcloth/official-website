import React from 'react';
import { Desktop, Mobile } from 'components/Layout';
import PcNormalFaq from './pc';
import H5NormalFaq from './h5';

export default class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <PcNormalFaq />
        </Desktop>
        <Mobile>
          <H5NormalFaq />
        </Mobile>
      </React.Fragment>
    );
  }
}
