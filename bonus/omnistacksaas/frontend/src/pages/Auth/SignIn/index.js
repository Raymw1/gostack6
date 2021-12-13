import React from "react";

import { Container, SignForm } from "../styles";
import Button from "styles/components/Button";

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <h1>Welcome</h1>
      <span>Email</span>
      <input type="email" name="email" />
      <span>Password</span>
      <input type="password" name="password" />
      <Button size="big" type="submit">
        Signin
      </Button>
    </SignForm>
  </Container>
);

export default SignIn;
