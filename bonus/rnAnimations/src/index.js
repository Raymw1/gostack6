import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';

// Animated.View, Animated.Text, Animated.Image, Animated.ScrollView

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.ballY, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: this.state.ballY}]} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  ball: {
    width: 70,
    height: 70,
    backgroundColor: '#F00',
    borderRadius: 35,
  },
};
