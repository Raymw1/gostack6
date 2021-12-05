import styled from 'styled-components/native';

import styles from 'styles';
const {colors, metrics} = styles;

export const Container = styled.View`
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  numColumns: 2,
})`
  padding: ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 48%;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  margin-bottom: ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius}px;
  overflow: hidden;
`;

export const ProductImage = styled.Image`
  height: 250px;
  object-fit: cover;
`;

export const ProductInfo = styled.View`
  margin: ${metrics.baseMargin}px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.darker};
`;

export const ProductSign = styled.Text`
  color: ${colors.regular};
`;

export const ProductPrice = styled.Text`
  margin: ${metrics.baseMargin}px 0 ${metrics.baseMargin / 2}px;
  font-weight: bold;
  font-size: 18px;
  color: ${colors.third};
`;
