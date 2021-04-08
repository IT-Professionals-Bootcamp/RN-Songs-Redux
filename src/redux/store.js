import { combineReducers, createStore } from 'redux';
import { selectedSongsReducer, songsReducer } from './reducer';

const Reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongsReducer,
});

export const store = createStore(Reducers);
