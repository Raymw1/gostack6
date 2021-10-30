import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';

import HeaderConfig from '../../styles/Header';
import RepositoryItem from './RepositoryItem';
import styles from './styles';

export default class Repositories extends Component {
  static navigationOptions = {
    ...HeaderConfig,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    repositoryInput: '',
    data: [],
    refreshing: false,
    error: false,
  };

  async componentDidMount() {
    this.checkExistentRepositories();
  }

  checkExistentRepositories = async () => {
    const repos = await AsyncStorage.getItem('@GitIssues:repositories');
    if (repos) this.setState({data: JSON.parse(repos)});
  };

  addRepository = async () => {
    const {repositoryInput, data} = this.state;
    if (!repositoryInput.trim()) return;
    this.setState({refreshing: true});
    try {
      let {data: repository} = await api.get(`/repos/${repositoryInput}`);
      repository = {
        id: repository.id,
        avatar: repository.owner.avatar_url,
        full_name: repository.full_name,
        name: repository.name,
      };
      this.setState(state => ({
        repositoryInput: '',
        data: [repository, ...data],
        error: false,
      }));
      await AsyncStorage.setItem(
        '@GitIssues:repositories',
        JSON.stringify(this.state.data),
      );
    } catch (error) {
      this.setState({error: true});
    } finally {
      this.setState({refreshing: false});
    }
  };

  renderItem = ({item}) => (
    <RepositoryItem repository={item} navigation={this.props.navigation} />
  );

  render() {
    const {data, refreshing, error} = this.state;
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
            borderColor={error ? '#EE7777' : '#ddd'}
          />
          <TouchableOpacity style={styles.button} onPress={this.addRepository}>
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
