import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProductList,
  Product,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductBrand,
  ProductPrice,
  ProductActions,
  ProductQuantity,
  TotalContainer,
  TotalText,
  TotalPrice,
} from './styles';

const products = [
  {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
  },
  {
    id: 3,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
  },
  {
    id: 4,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
];

export class Cart extends Component {
  render() {
    return (
      <Container>
        <ProductList
          // data={this.props.cart.pro  ducts}
          data={products}
          // onRemove={this.props.cart.removeProduct}
          renderItem={({item}) => (
            <Product>
              <ProductDetails>
                <ProductImage source={{uri: item.image}} />
                <ProductInfo>
                  <ProductTitle>{item.name}</ProductTitle>
                  <ProductBrand>{item.brand}</ProductBrand>
                  <ProductPrice>{item.price}</ProductPrice>
                </ProductInfo>
              </ProductDetails>
              <ProductActions>
                <ProductQuantity
                  // value={this.props.cart.quantity}
                  value={1}
                  onChange={() => {}}
                />
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="delete" size={20} color="#BBB" />
                </TouchableOpacity>
              </ProductActions>
            </Product>
          )}
          keyExtractor={item => item.id}
        />
        <TotalContainer>
          <TotalText>Subtotal</TotalText>
          <TotalPrice>$500,00</TotalPrice>
          {/* <TotalPrice>${this.props.cart.total}</TotalPrice> */}
        </TotalContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect()(Cart);
