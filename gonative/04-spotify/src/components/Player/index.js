import React from 'react';

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon,
} from './styles';

const Player = () => (
  <Container>
    <CoverBackground
      source={{
        uri: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-podcastr/funcional.jpg',
      }}
    />
    <EpisodeInfo>
      <Title>Papercut</Title>
      <Author>Linkin Park</Author>
    </EpisodeInfo>
    <Controls>
      <ControlButton onPress={() => {}}>
        <ControlIcon name="skip-previous" />
      </ControlButton>
      <ControlButton onPress={() => {}}>
        <ControlIcon name="play-circle-filled" />
      </ControlButton>
      <ControlButton onPress={() => {}}>
        <ControlIcon name="skip-next" />
      </ControlButton>
    </Controls>
  </Container>
);

export default Player;
