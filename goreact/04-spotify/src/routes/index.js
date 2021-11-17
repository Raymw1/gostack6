import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Browse from "../pages/browse";

const Routes = () => (
  <Switch>
    <Route path="/" element={<Browse />} />
  </Switch>
);

export default Routes;
