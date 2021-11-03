import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';

// Animated.View, Animated.Text, Animated.Image, Animated.ScrollView

const ballY = new Animated.Value(0);
// const ballX = new Animated.add(ballY, 0);
// const ballX = new Animated.subtract(ballY, 0);
// const ballX = new Animated.multiply(ballY, 5);
const ballX = new Animated.divide(ballY, 5);

export default class App extends Component {
  state = {
    ballY,
    ballX,
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
        <Animated.View
          style={[styles.ball, {top: this.state.ballY, left: this.state.ballX}]}
        />
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
