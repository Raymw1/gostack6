import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Browse from "../pages/browse";
import Playlist from "../pages/playlist";

const Routes = () => (
  <Switch>
    <Route path="/" element={<Browse />} />
    <Route path="/playlists/:id" element={<Playlist />} />
  </Switch>
);

export default Routes;
