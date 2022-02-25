import styled from 'styled-components/native';

import {fonts, colors} from 'styles';

const sizes = {
  Gigante: 90,
  Grande: 80,
  Média: 70,
  Pequena: 60,
};

export const SizeContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  margin-bottom: 12px;
  background-color: ${colors.white};
  padding: 20px 0px 20px;
  flex: 1;
  height: 200px;
  border-radius: 8px;
  margin-right: 8px;
  align-items: center;
`;

export const SizeImage = styled.Image`
  width: ${props => `${sizes[props.size]}px`};
  height: ${props => `${sizes[props.size]}px`};
  margin-top: ${props => `${90 - sizes[props.size]}px`};
  border-radius: 4px;
`;

export const SizeDescription = styled.View`
  margin-top: 8px;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const SizeTitle = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  color: ${colors.primary};
  margin-top: 10px;
`;

export const SizePrice = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  color: ${colors.regular};
  margin-top: 5px;
`;
