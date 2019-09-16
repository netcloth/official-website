import { connect } from 'dva';
import { withRouter } from 'dva/router';

const connectWithRouter = (props) => (Components) => {
  return withRouter(connect(props)(Components));
};


export default connectWithRouter;
