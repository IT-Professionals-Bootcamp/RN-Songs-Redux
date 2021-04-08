import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import SongScreen from './src/screens/SongScreen';
import { combineReducers, createStore } from 'redux';
import { selectedSongsReducer, songsReducer } from './reducer';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider
        store={createStore(
          combineReducers({
            songs: songsReducer,
            selectedSong: selectedSongsReducer,
          })
        )}
      >
        <SongScreen />
      </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
