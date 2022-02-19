import styled from 'styled-components/native';

import {fonts, colors} from 'styles';

export const ProductContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex-direction: row;
  margin-bottom: 12px;
  background-color: ${colors.white};
  padding: 12px;
  border-radius: 8px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  margin-right: 12px;
`;

export const ProductInfo = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: ${fonts.medium};
  font-weight: bold;
  color: ${colors.primary};
`;

export const ProductDescription = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.regular};
`;

export const ProductPreparationTime = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const ProductTime = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.regular};
  margin-left: 4px;
`;
