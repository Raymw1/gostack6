import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from './styles';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

class Main extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    return (
      <Container>
        <CategoryList />
        <ProductList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
