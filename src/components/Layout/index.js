import React from "react";
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={751} />;
const Mobile = props => <Responsive {...props} maxWidth={750} />;


export {
  Desktop,
  Mobile,
}
