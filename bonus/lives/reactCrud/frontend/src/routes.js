import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm/formik";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users" component={UserList} />
        <Route path="/users/create" component={UserForm} />
        <Route path="/users/edit/:id" component={UserForm} />
      </Switch>
    </BrowserRouter>
  );
}
