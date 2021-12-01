import {takeLatest, all} from 'redux-saga/effects';

import {PodcastTypes} from 'store/ducks/podcasts';
import {load as loadPodcasts} from './podcasts';

export default function* rootSaga() {
  return yield all([takeLatest(PodcastTypes.LOAD_REQUEST, loadPodcasts)]);
}
