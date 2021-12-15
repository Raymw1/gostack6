import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "pages/Main";
import SignUp from "pages/Auth/SignUp";
import SignIn from "pages/Auth/SignIn";

import history from "./history";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
