import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, ActivityIndicator} from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';

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
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const {data} = await api.get(`/users/${username}/repos`);
    this.setState({data, loading: false});
  }

  renderList = () =>
    this.state.data.map(repo => <Text key={repo.id}>{repo.name}</Text>);

  render() {
    return (
      <View>
        <Header title="Repositories" />
        {this.state.loading ? <ActivityIndicator /> : this.renderList}
      </View>
    );
  }
}
