import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CartActions from 'store/ducks/cart';

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

export class Cart extends Component {
  render() {
    return (
      <Container>
        <ProductList
          data={this.props.cart.data}
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
                  value={String(item.quantity)}
                  onChangeText={text =>
                    this.props.setProductCartRequest(item.id, Number(text))
                  }
                />
                <TouchableOpacity
                  onPress={() => this.props.removeCartRequest(item.id)}>
                  <Icon name="delete" size={20} color="#BBB" />
                </TouchableOpacity>
              </ProductActions>
            </Product>
          )}
          keyExtractor={item => item.id}
        />
        <TotalContainer>
          <TotalText>Subtotal</TotalText>
          <TotalPrice>${this.props.cart.subtotal}</TotalPrice>
        </TotalContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
