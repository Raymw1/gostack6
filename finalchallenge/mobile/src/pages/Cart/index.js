import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsActions from 'store/ducks/products';

import Main from 'components/Main';
import {Header, Title, ProductsList} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from 'styles';
import Product from './CartItem';
class Cart extends Component {
  componentDidMount() {
    this.props.productsRequest();
  }

  render() {
    return (
      <Main>
        <Header>
          <Icon name="history" size={24} color="#fff" />
          <Title>Pizzaria Don Juan</Title>
          <Icon
            name="shopping-basket"
            size={24}
            color="#FFF"
            style={{
              backgroundColor: colors.secondary,
              padding: 10,
              borderRadius: 50,
            }}
          />
        </Header>
        <ProductsList
          data={this.props.products}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Product product={item} typesRequest={this.props.typesRequest} />
          )}
        />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.productsData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
