import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

class Main extends Component {
  static propTypes = {
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  static defaultProps = {
    activeTeam: null,
  };

  render() {
    const {activeTeam} = this.props;
    return (
      <View style={styles.backgroundWrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              hitSlop={{top: 5, bottom: 5, left: 10, right: 10}}
              onPress={() => {}}>
              <Icon name="menu" size={24} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.teamTitle}>
              {activeTeam ? activeTeam.name : 'Select a team'}
            </Text>
            <TouchableOpacity
              hitSlop={{top: 5, bottom: 5, left: 10, right: 10}}
              onPress={() => {}}>
              <Icon name="group" size={24} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({activeTeam: state.teams.active});

export default connect()(Main);
