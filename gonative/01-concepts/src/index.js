import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
