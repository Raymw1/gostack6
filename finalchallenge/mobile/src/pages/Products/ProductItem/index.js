import React from 'react';

import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPreparationTime,
  ProductTime,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Product = ({
  product: {
    File: {url},
    title,
    description,
    preparation_time,
  },
}) => (
  <ProductContainer>
    <ProductImage source={{uri: url.replace('localhost', '10.0.2.2')}} />
    <ProductInfo>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPreparationTime>
        <Icon name="access-time" size={16} color="#999" />
        <ProductTime>{preparation_time} mins</ProductTime>
      </ProductPreparationTime>
    </ProductInfo>
  </ProductContainer>
);

export default Product;
