import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CategoriesActions from 'store/ducks/categories';
import ProductsActions from 'store/ducks/products';

import {CategoryList, Category, CategoryText} from './styles';

class Categories extends Component {
  componentDidMount() {
    this.props.loadCategoriesRequest();
  }

  handleCategory = async id => {
    await this.props.changeCategoryRequest(id);
    this.props.loadProductsRequest(id);
  };

  render() {
    const {data, activeCategory} = this.props.categories;
    return (
      <CategoryList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Category onPress={() => this.handleCategory(item.id)}>
            <CategoryText active={item.id === activeCategory}>
              {item.title}
            </CategoryText>
          </Category>
        )}
      />
    );
  }
}
const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...CategoriesActions, ...ProductsActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
