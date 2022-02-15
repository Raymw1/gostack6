import {Text, View} from 'react-native';
import React, {Component} from 'react';

import Main from 'components/Main';
import {Header, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from 'styles';
export default class index extends Component {
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
      </Main>
    );
  }
}
