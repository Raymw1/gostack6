import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Main extends Component {
  static navigationOptions = {
    // TO DO
  };

  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    return (
      <View>
        <Text> Main </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
