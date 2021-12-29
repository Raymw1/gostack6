import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideMenu from 'react-native-side-menu';

import {connect} from 'react-redux';

import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import TeamSwitcher from 'components/TeamSwitcher';

class Main extends Component {
  static propTypes = {
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  static defaultProps = {
    activeTeam: null,
  };

  state = {
    leftOpen: false,
  };

  toggleMenu = (position, isOpen) => {
    this.setState({[`${position}Open`]: isOpen});
  };

  render() {
    const {activeTeam} = this.props;
    const {leftOpen} = this.state;
    return (
      <View style={styles.backgroundWrapper}>
        <SideMenu
          isOpen={leftOpen}
          disableGestures
          onChange={isOpen => this.toggleMenu('left', isOpen)}
          openMenuOffset={70}
          menu={<TeamSwitcher />}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
                hitSlop={{top: 5, bottom: 5, left: 10, right: 10}}
                onPress={() => this.toggleMenu('left', true)}>
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
        </SideMenu>
      </View>
    );
  }
}

const mapStateToProps = state => ({activeTeam: state.teams.active});

export default connect(mapStateToProps)(Main);
