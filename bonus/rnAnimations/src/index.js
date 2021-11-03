import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';

// Animated.View, Animated.Text, Animated.Image, Animated.ScrollView

export default class App extends Component {
  state = {
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    // this.timingAnimation();
    // this.springAnimation();
    this.decayAnimation();
  }

  timingAnimation = () => {
    Animated.timing(this.state.ballY, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  springAnimation = () => {
    Animated.spring(this.state.ballY, {
      toValue: 300,
      bounciness: 30,
      useNativeDriver: false,
    }).start();
  };

  decayAnimation = () => {
    Animated.decay(this.state.ballY, {
      velocity: 1,
      useNativeDriver: false,
    }).start();
  };

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
