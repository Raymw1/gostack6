import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, FlatList} from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OrganizationItem from './OrganizationItem';
import Header from '../../components/Header';

import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = ({tintColor}) => (
  <Icon name="building" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@Githuber:username');
    const {data} = await api.get(`/users/${username}/orgs`);
    this.setState({data, loading: false, refreshing: false});
  };

  renderListItem = ({item}) => <OrganizationItem organization={item} />;

  renderList = () => {
    const {data, refreshing} = this.state;
    return (
      <FlatList
        data={data}
        key={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Organizations" />
        {this.state.loading ? <ActivityIndicator /> : this.renderList()}
      </View>
    );
  }
}
