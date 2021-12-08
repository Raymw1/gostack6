import styled from 'styled-components/native';

import styles from 'styles';
const {colors, metrics} = styles;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${metrics.basePadding}px;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${metrics.basePadding / 2}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  margin: 0 ${metrics.baseMargin}px;
  width: 50px;
  height: 80px;
  border-radius: 4px;
`;

export const ProductInfo = styled.View`
  margin-left: ${metrics.baseMargin}px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: ${colors.darker};
  font-weight: bold;
`;

export const ProductBrand = styled.Text`
  font-size: 14px;
  color: ${colors.regular};
`;

export const ProductPrice = styled.Text`
  color: ${colors.third};
  font-weight: bold;
  font-size: 16px;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductQuantity = styled.TextInput.attrs({
  placeholderTextColor: colors.regular,
  underlineColorAndroid: 'transparent',
})`
  width: 36px;
  height: 24px;
  border-radius: 4px;
  padding: 0 8px;
  border: 1px solid ${colors.regular};
  background-color: ${colors.white};
  color: ${colors.regular};
  margin-right: ${metrics.baseMargin}px;
`;

export const TotalContainer = styled.View`
  width: 100%;
  background-color: ${colors.white};
  height: 120px;
  align-items: center;
  justify-content: center;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  color: ${colors.regular};
`;

export const TotalPrice = styled.Text`
  font-size: 28px;
  color: ${colors.third};
  font-weight: bold;
`;
