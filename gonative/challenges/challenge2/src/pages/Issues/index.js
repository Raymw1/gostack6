import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import api from '../../services/api';
import PropTypes from 'prop-types';

import HeaderConfig from '../../styles/Header';
import IssueItem from './IssueItem';
import styles from './styles';

const OpacityButton = ({onPress, children, status, currentStatus}) => (
  <TouchableOpacity style={styles.status} onPress={onPress}>
    <Text
      style={{
        ...styles.statusText,
        fontWeight: status === currentStatus ? 'bold' : 'normal',
      }}>
      {status}
    </Text>
    {children}
  </TouchableOpacity>
);

export default class Issues extends Component {
  static navigationOptions = props => ({
    ...HeaderConfig,
    title: props.navigation.getParam('repository')?.name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    repository: {},
    data: [],
    refreshing: false,
    status: 'all',
  };

  async componentDidMount() {
    this.setState(
      {repository: this.props.navigation.getParam('repository')},
      this.getIssues,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.status !== this.state.status) {
      this.getIssues(this.state.status);
    }
  }

  getIssues = async (status = 'all') => {
    try {
      this.setState({refreshing: true});
      const {data} = await api.get(
        `/repos/${this.state.repository.full_name}/issues?state=${status}`,
      );
      this.setState({data, refreshing: false}, () =>
        console.tron.log(this.state),
      );
    } catch (error) {
      console.tron.error(error);
    }
  };

  renderItem = ({item}) => (
    <IssueItem issue={item} navigation={this.props.navigation} />
  );

  render() {
    const {data, refreshing, status} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.statuses}>
          <OpacityButton
            onPress={() => this.setState({status: 'all'})}
            currentStatus={status}
            status="all"></OpacityButton>
          <OpacityButton
            onPress={() => this.setState({status: 'open'})}
            currentStatus={status}
            status="open"></OpacityButton>
          <OpacityButton
            onPress={() => this.setState({status: 'closed'})}
            currentStatus={status}
            status="closed"></OpacityButton>
        </View>
        <FlatList
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
