import React, {Component} from 'react';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductDescription,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  AddProductButton,
  AddProductButtonText,
} from './styles';

export default class Product extends Component {
  static navigationOptions = {
    title: 'Product details',
  };

  render() {
    const product = this.props.navigation.getParam('product');
    return (
      <Container>
        <ProductContainer>
          <ProductImage source={{uri: product.image}} />
          <ProductInfo>
            <ProductDescription>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductBrand>{product.brand}</ProductBrand>
            </ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductInfo>
          <AddProductButton>
            <AddProductButtonText>Add to cart</AddProductButtonText>
          </AddProductButton>
        </ProductContainer>
      </Container>
    );
  }
}
