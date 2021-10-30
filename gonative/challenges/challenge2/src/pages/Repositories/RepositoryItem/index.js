import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const RepositoryItem = ({repository, navigation}) => {
  function handleNavigate() {
    navigation.navigate('Issues', {repository});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.repository}>
        <Image
          style={styles.avatar}
          source={{
            uri: repository.avatar,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.full_name}>{repository.full_name}</Text>
          <Text style={styles.name}>{repository.name}</Text>
        </View>
      </View>
      <Icon name="angle-right" size={20} color="#DDD" />
    </TouchableOpacity>
  );
};

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RepositoryItem;
