import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const RepositoryItem = ({repository}) => {
  return (
    <TouchableOpacity style={styles.container}>
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

export default RepositoryItem;
