import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
  setCurrent: ['episodeId'],
  play: null,
  pause: null,
  next: null,
  previous: null,
});

export const PlayerTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
  playing: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [PlayerTypes.SET_PODCAST_SUCCESS]: (state, {podcast}) =>
    state.merge({podcast, current: podcast.tracks[0].id}),
  [PlayerTypes.SET_CURRENT]: (state, {episodeId}) =>
    state.merge({current: episodeId}),
  [PlayerTypes.PLAY]: state => state.merge({playing: true}),
  [PlayerTypes.PAUSE]: state => state.merge({playing: false}),
});
