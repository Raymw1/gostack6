import React, {Component} from 'react';
import {Text, View, Animated, PanResponder} from 'react-native';

// Animated.View, Animated.Text, Animated.Image, Animated.ScrollView

const ballY = new Animated.Value(0);
const ballX = new Animated.Value(0);
// const ballX = new Animated.add(ballY, 0);
// const ballX = new Animated.subtract(ballY, 0);
// const ballX = new Animated.multiply(ballY, 5);
// const ballX = new Animated.divide(ballY, 5);

export default class App extends Component {
  state = {
    ballY,
    ballX,
    ball: new Animated.ValueXY({x: 0, y: 0}),
  };

  componentDidMount() {
    // this.timingAnimation();
    // this.springAnimation();
    // this.decayAnimation();
    // this.sequenceAnimation();
    // this.parallelAnimation();
    // this.staggerAnimation();
    // this.loopAnimation();
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

  sequenceAnimation = () => {
    // Wait the first one
    Animated.sequence([
      Animated.timing(this.state.ballY, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.delay(500),
      Animated.timing(this.state.ballX, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  parallelAnimation = () => {
    // All together
    Animated.parallel([
      Animated.timing(this.state.ballY, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.ballX, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  staggerAnimation = () => {
    // Wait the first one with delay
    Animated.stagger(500, [
      Animated.timing(this.state.ballY, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.ballX, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  loopAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.ballY, {
          toValue: 300,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(500),
        Animated.timing(this.state.ballX, {
          toValue: 300,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(500),
        Animated.timing(this.state.ballY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(500),
        Animated.timing(this.state.ballX, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.delay(500),
      ]),
      {
        iterations: 3,
      },
    ).start();
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.ball.setOffset({
          x: this.state.ball.x._value,
          y: this.state.ball.y._value,
        });
        this.state.ball.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.state.ball.x,
            dy: this.state.ball.y,
          },
        ],
        {
          listener: (e, gestureState) => {
            console.log(gestureState);
          },
        },
      ),
      onPanResponderRelease: () => {
        this.state.ball.flattenOffset();
      },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.ball,
            {
              // top: this.state.ballY,
              // left: this.state.ballX,
              // opacity: this.state.ballY.interpolate({
              //   inputRange: [0, 100, 200],
              //   outputRange: [1, 1, 0.2],
              //   extrapolate: 'clamp', // STOP
              // }),
              transform: [
                {translateX: this.state.ball.x},
                {translateY: this.state.ball.y},
              ],
            },
          ]}
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
