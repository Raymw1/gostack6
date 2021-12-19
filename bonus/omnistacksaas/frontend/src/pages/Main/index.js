import React from "react";

import { Container } from "./styles";
import TeamSwitcher from "components/TeamSwitcher";
import Projects from "components/Projects";

const Main = () => (
  <Container>
    <TeamSwitcher />
    <Projects />
  </Container>
);

export default Main;
