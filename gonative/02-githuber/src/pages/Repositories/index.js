import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

const Repositories = () => {
  return (
    <View>
      <Header title="Repositories" />
    </View>
  );
};

const TabIcon = ({tintColor}) => (
  <Icon name="list-alt" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repositories;
