import React from 'react';
import Root from 'components/Root';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Mobile from 'components/Layout';
import HomePage from "routes/HomePage";
import NormalFaq from "routes/NormalFaq";
import DownLoad from "./routes/DownLoad";
import Install from "./routes/Install";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Root>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/faq" exact component={NormalFaq} />
          <Route path="/download" exact component={DownLoad} />
          <Route path="/install" exact component={Install} />
          <Redirect to="/" />
        </Switch>
      </Root>
    </Router>
  );
}

export default RouterConfig;
