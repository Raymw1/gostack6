import styled from 'styled-components/native';

import {fonts, colors} from 'styles';

export const TypeContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  margin-bottom: 12px;
  background-color: ${colors.white};
  padding: 20px;
  border-radius: 8px;
  margin-right: 8px;
  align-items: center;
`;

export const TypeImage = styled.Image`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 4px;
`;

export const TypeTitle = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  color: ${colors.primary};
`;
