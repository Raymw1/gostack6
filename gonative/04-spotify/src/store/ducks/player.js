import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

const {Types, Creators} = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastSuccess: ['podcast'],
});

export const PlayerTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [PlayerTypes.SET_PODCAST_SUCCESS]: (state, {podcast}) =>
    state.merge({podcast, current: podcast.tracks[0].id}),
});
