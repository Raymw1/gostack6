import React from 'react';

import {Container, Background, Content} from './styles';

export default function Main({children}) {
  return (
    <Container>
      <Background>
        <Content>{children}</Content>
      </Background>
    </Container>
  );
}
