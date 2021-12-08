import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CartActions from 'store/ducks/cart';

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

class Product extends Component {
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
          <AddProductButton onPress={() => this.props.addCartRequest(product)}>
            <AddProductButtonText>Add to cart</AddProductButtonText>
          </AddProductButton>
        </ProductContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Product);
