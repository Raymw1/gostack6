import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleSignOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Welcome');
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <View style={styles.left} />
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.handleSignOut}>
          <Icon name="exchange" size={16} style={styles.icons} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);
