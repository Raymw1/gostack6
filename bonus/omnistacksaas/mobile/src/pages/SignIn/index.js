import React, {Component} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import styles from './styles';

export default class SingIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const {email, password} = this.state;
  };

  render() {
    const {email, password} = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <View>
          <Text style={styles.title}>SignIn</Text>
          <Text style={styles.label}>E-MAIL</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => this.setState({email: text})}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            autoFocus
            returnKeyType="next"
            onSubmitEditing={() => this.passordInput.focus()}
          />
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={text => this.setState({password: text})}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            returnKeyType="send"
            ref={el => {
              this.passordInput = el;
            }}
            onSubmitEditing={this.handleSubmit}
          />
          <TouchableOpacity onPress={this.handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
