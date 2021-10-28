import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';

const Organizations = () => {
  return (
    <View>
      <Header title="Organizations" />
    </View>
  );
};

const TabIcon = ({tintColor}) => (
  <Icon name="building" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Organizations.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Organizations;
