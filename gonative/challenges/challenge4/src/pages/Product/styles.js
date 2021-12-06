import styled from 'styled-components/native';

import styles from 'styles';
const {colors, metrics} = styles;

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
  padding: ${metrics.basePadding}px;
`;

export const ProductContainer = styled.View`
  background: ${colors.white};
  width: 100%;
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
`;

export const ProductImage = styled.Image`
  margin: 0 ${metrics.baseMargin * 2}px;
  height: 400px;
  object-fit: contain;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductDescription = styled.View`
  gap: 4px;
  margin: ${metrics.baseMargin}px 0;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  color: ${colors.darker};
  font-weight: bold;
`;

export const ProductBrand = styled.Text`
  font-size: 14px;
  color: ${colors.regular};
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${colors.third};
`;

export const AddProductButton = styled.TouchableOpacity`
  background-color: ${colors.third};
  width: 100%;
  padding: 12px 0;
  align-items: center;
  justify-content: center;
  border-radius: ${metrics.baseRadius}px;
`;

export const AddProductButtonText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${colors.white};
`;
