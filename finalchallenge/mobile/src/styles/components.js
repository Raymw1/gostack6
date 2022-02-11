import styled from 'styled-components/native';

import {colors, fonts} from 'styles';

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background-color: ${colors.white};
  width: 100%;
  margin-bottom: 12px;
  padding: 12px 20px;
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
