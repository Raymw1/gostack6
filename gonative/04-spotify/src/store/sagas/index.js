import {takeLatest, all} from 'redux-saga/effects';

import {PodcastTypes} from 'store/ducks/podcasts';
import {load as loadPodcasts} from './podcasts';

import {PlayerTypes} from 'store/ducks/player';
import {
  init as initPlayer,
  setPodcast,
  play,
  pause,
  next,
  previous,
  reset,
} from './player';

export default function* rootSaga() {
  return yield all([
    initPlayer(),
    takeLatest(PodcastTypes.LOAD_REQUEST, loadPodcasts),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
    takeLatest(PlayerTypes.NEXT, next),
    takeLatest(PlayerTypes.PREVIOUS, previous),
    // takeLatest(PlayerTypes.RESET, reset),
  ]);
}
