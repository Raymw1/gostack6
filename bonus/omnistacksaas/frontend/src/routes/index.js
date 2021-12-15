import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "pages/Main";
import SignUp from "pages/Auth/SignUp";
import SignIn from "pages/Auth/SignIn";

import history from "./history";
import Private from "./private";
import Guest from "./guest";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Private exact path="/" component={Main} />
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
