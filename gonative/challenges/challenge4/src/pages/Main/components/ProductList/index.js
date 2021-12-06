import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsActions from 'store/ducks/products';

import {
  Container,
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductBrand,
  ProductPrice,
} from './styles';

class Products extends Component {
  componentDidMount() {
    const {loadProductsRequest, categoryId} = this.props;
    loadProductsRequest(categoryId);
  }

  render() {
    const {
      data: {products},
    } = this.props.products;
    return (
      <Container>
        <ProductList
          data={products}
          keyExtractor={item => String(item.id)}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          renderItem={({item}) => (
            <Product>
              <ProductImage source={{uri: item.image}} />
              <ProductTitle>{item.name}</ProductTitle>
              <ProductBrand>{item.brand}</ProductBrand>
              <ProductPrice>${item.price}</ProductPrice>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  categoryId: state.categories.activeCategory,
});

const mapDispatchToProps = dispacth =>
  bindActionCreators(ProductsActions, dispacth);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
