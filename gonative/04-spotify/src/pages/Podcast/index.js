import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayerActions from 'store/ducks/player';

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  BackButton,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

class Podcast extends Component {
  handleBack = () => {
    this.props.navigation.goBack();
  };

  handlePlay = () => {
    const {setPodcastRequest, navigation} = this.props;
    const podcast = navigation.getParam('podcast');
    setPodcastRequest(podcast);
  };

  render() {
    const podcast = this.props.navigation.getParam('podcast');
    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{uri: podcast.cover}} blurRadius={5} />
              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={20} color="#FFF" />
              </BackButton>
              <Cover source={{uri: podcast.cover}} />
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton onPress={this.handlePlay}>
                <PlayButtonText>Reproduzir</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({item: episode}) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

// const mapStateToProps = state => ({ player: state.player })

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(null, mapDispatchToProps)(Podcast);
