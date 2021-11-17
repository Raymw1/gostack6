import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input type="text" placeholder="Search" />
    </Search>

    <User>
      <img src="https://github.com/Raymw1.png" alt="Raymw" />
      Rayan Wilbert
    </User>
  </Container>
);

export default Header;
