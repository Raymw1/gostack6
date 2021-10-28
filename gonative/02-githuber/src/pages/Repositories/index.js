import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, FlatList} from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RepositoryItem from './RepositoryItem';
import Header from '../../components/Header';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = ({tintColor}) => (
  <Icon name="list-alt" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@Githuber:username');
    const {data} = await api.get(`/users/${username}/repos`);
    this.setState({data, loading: false, refreshing: false});
  };

  renderListItem = ({item}) => <RepositoryItem repository={item} />;

  renderList = () => {
    const {data, refreshing} = this.state;
    return (
      <FlatList
        data={data}
        key={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositories" />
        {this.state.loading ? <ActivityIndicator /> : this.renderList()}
      </View>
    );
  }
}
