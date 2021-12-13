import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Main from "pages/Main";
import SignUp from "pages/Auth/SignUp";
import SignIn from "pages/Auth/SignIn";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
