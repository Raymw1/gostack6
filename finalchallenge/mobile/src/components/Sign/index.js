import React from 'react';

import {Container, Background, Image, Form, Styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Sign = ({children}) => (
  <Container>
    <Background>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.9)']}
        style={Styles.gradient}>
        <Image />
        <Form>{children}</Form>
      </LinearGradient>
    </Background>
  </Container>
);

export default Sign;
