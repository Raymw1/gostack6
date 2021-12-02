import {call, put, select} from '@redux-saga/core/effects';
import TrackPlayer from 'react-native-track-player';

import PlayerActions from 'store/ducks/player';

export function* init() {
  yield call(TrackPlayer.setupPlayer);
  TrackPlayer.addEventListener('playback-track-changed', console.tron.log);
  TrackPlayer.addEventListener('playback-state', console.tron.log);
}

export function* setPodcast({podcast, episodeId}) {
  const currentPodcast = yield select(state => state.player.podcast);

  if (!currentPodcast || currentPodcast.id !== podcast.id) {
    yield call(TrackPlayer.stop);
    yield call(TrackPlayer.reset);
    yield call(TrackPlayer.add, [...podcast.tracks]);
    yield put(PlayerActions.setPodcastSuccess(podcast));
  }
  console.tron.log(episodeId);

  if (episodeId) {
    yield call(TrackPlayer.skip, Number(episodeId));
    yield put(PlayerActions.setCurrent(episodeId));
  }

  yield put(PlayerActions.play());
}

export function* play() {
  yield call(TrackPlayer.play);
}

export function* pause() {
  yield call(TrackPlayer.pause);
}
