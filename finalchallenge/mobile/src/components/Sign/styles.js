import styled, {css} from 'styled-components/native';
import {StyleSheet} from 'react-native';

import backgroundImage from 'images/background.jpg';
import logo from 'images/logo.png';

import {colors, fonts} from 'styles';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground.attrs({
  source: backgroundImage,
})`
  flex: 1;
`;

export const Image = styled.Image.attrs({
  source: logo,
})`
  width: 72px;
  height: 72px;
  margin-bottom: 40px;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
`;

export const Styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
