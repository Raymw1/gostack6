import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const IssueItem = ({issue, navigation}) => {
  function handleNavigate() {
    Linking.openURL(issue.html_url);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.issue}>
        <Image
          style={styles.avatar}
          source={{
            uri: issue.user.avatar_url,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {issue.title}
          </Text>
          <Text style={styles.name}>{issue.user.login}</Text>
        </View>
      </View>
      <Icon name="angle-right" size={20} color="#DDD" />
    </TouchableOpacity>
  );
};

IssueItem.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default IssueItem;
