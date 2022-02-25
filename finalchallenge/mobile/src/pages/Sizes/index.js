import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsActions from 'store/ducks/products';

import Main from 'components/Main';
import {Header, Title, List} from 'styles/components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Size from './SizeItem';

class Sizes extends Component {
  render() {
    return (
      <Main>
        <Header>
          <Icon
            name="arrow-back-ios"
            size={16}
            style={{marginTop: 2, marginRight: 10}}
            color="#fff"
            onPress={() => this.props.navigation.navigate('Products')}
          />
          <Title>Selecione um tipo</Title>
        </Header>
        <List
          data={this.props.sizes}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Size size={item} addToCartRequest={new Function()} />
          )}
          numColumns={2}
          // Column gap
          columnWrapperStyle={{
            marginTop: 8,
          }}
        />
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.products.sizesData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sizes);
