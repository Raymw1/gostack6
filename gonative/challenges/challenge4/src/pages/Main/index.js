import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Container, CategoryList, Category, CategoryText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabIcon = ({tintColor}) => (
  <Icon name="home" size={20} color={tintColor} />
);

const list = [
  'Camisetas',
  'Calças',
  'Camisetas de Couro',
  'Calças de Couro',
  'Camisetas de Algodão',
  'Calças de Algodão',
];

class Main extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    return (
      <Container>
        <CategoryList
          data={list}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Category>
              <CategoryText>{item}</CategoryText>
            </Category>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
