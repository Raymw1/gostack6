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

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background-color: ${colors.white};
  width: 100%;
  margin-bottom: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: ${fonts.big};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${colors.secondary};
  width: 100%;
  margin-bottom: 20px;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 16px;
`;

export const ButtonText = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.white};
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
`;

export const TextLink = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.big};
  font-weight: 500;
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
