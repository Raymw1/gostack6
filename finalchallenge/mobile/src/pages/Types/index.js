import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductsActions from 'store/ducks/products';

import Main from 'components/Main';
import {Header, Title, TypesList} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Type from './TypeItem';

class Types extends Component {
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
        <TypesList
          data={this.props.types}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Type type={item} sizesRequest={this.props.sizesRequest} />
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
  types: state.products.typesData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Types);
