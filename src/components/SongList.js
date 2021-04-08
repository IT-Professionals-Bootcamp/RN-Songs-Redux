import React from 'react';
import { FlatList, Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { selectSong } from '../redux/actions';

const SongList = ({ songs, selectSong }) => {
  console.log(`props.songs: `, songs);
  return (
    <FlatList
      ListHeaderComponent={() => <Text>Songs List</Text>}
      style={{ padding: 10 }}
      data={songs}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text>{item.title}</Text>
          <Button title="Select Song" onPress={() => selectSong(item)} />
        </View>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  console.log(`state: `, state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);

const styles = StyleSheet.create({
  row: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
  },
});
