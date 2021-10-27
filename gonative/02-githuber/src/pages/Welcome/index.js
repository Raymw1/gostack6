import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {colors} from '../../styles';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.text}>
      We need you to let us now your user on Github, to continue
    </Text>
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Input your user"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
