import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Container} from './styles';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';

class Main extends Component {
  render() {
    return (
      <Container>
        <CategoryList />
        <ProductList navigation={this.props.navigation} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
