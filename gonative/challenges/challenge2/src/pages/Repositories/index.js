import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';

import HeaderConfig from '../../styles/Header';
import RepositoryItem from './RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    ...HeaderConfig,
  };

  state = {
    repositoryInput: '',
    data: [
      {
        id: 1,
        avatar: 'https://github.com/Raymw1.png',
        full_name: 'facebook/react',
        name: 'React',
      },
      {
        id: 2,
        avatar: 'https://avatars0.githubusercontent.com/u/8186664?v=4',
        full_name: 'facebook/react',
        name: 'React',
      },
    ],
    refreshing: false,
  };

  renderItem = ({item}) => <RepositoryItem repository={item} />;

  render() {
    const {data, refreshing} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.addContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new repository"
            value={this.state.repositoryInput}
            onChangeText={text => this.setState({repositoryInput: text})}
            onSubmitEditing={this.addRepository}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.repositories}
          data={data}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          onRefresh={() => {}}
          refreshing={refreshing}
        />
      </View>
    );
  }
}
