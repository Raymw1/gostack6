import React, {Component} from 'react';
import api from '../../services/api';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {colors} from '../../styles';

import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Welcome extends Component {
  state = {username: ''};

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);
    return user.data;
  };

  handleSignIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;
    if (!username.trim()) return;
    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
      navigation.navigate('Repositories');
    } catch (error) {
      console.log('User not found!');
    }
  };

  saveUser = async username => {
    await AsyncStorage.setItem('@Githuber/username', username);
  };

  render() {
    const {username} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.secondary}
        />
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
            value={username}
            onChangeText={text => this.setState({username: text})}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSignIn}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
