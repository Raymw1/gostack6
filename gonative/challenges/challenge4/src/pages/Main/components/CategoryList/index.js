import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CategoriesActions from 'store/ducks/categories';

import {CategoryList, Category, CategoryText} from './styles';

class Categories extends Component {
  componentDidMount() {
    this.props.loadCategoriesRequest();
  }

  render() {
    const {data, activeCategory} = this.props.categories;
    return (
      <CategoryList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Category>
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
  bindActionCreators(CategoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
