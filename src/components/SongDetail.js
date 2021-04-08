import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  return (
    <View style={{ marginTop: '20%' }}>
      <Text>Song Detail:</Text>
      {selectedSong && (
        <>
          <Text>selected song is not null</Text>
          <Text>{selectedSong.title}</Text>
          <Text>{selectedSong.duration}</Text>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);

const styles = StyleSheet.create({});
