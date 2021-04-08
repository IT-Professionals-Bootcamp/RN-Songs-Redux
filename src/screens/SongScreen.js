import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SongDetail from '../components/SongDetail';
import SongList from '../components/SongList';

const SongScreen = () => {
  return (
    <View>
      <SongDetail />
      <SongList />
    </View>
  );
};

export default SongScreen;

const styles = StyleSheet.create({});
