import React, {Component} from 'react';
import {ActivityIndicator, Text} from 'react-native';

import {Container} from './styles';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as RepositoriesActions} from 'store/ducks/repositories';

class Repositories extends Component {
  componentDidMount() {
    this.props.loadRepositoriesRequest();
  }

  render() {
    const {repositories} = this.props;
    return (
      <Container>
        {repositories.loading ? (
          <ActivityIndicator size="small" color="#999" />
        ) : (
          repositories.data.map(repository => (
            <Text key={repository.id}>{repository.name}</Text>
          ))
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
