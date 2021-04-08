export const songsReducer = () => {
  return [
    { title: 'Daglar Daglar', duration: '3:45' },
    { title: 'Gecti Dost Kervani', duration: '4:15' },
    { title: 'Allah Yar', duration: '4:37' },
    { title: 'Uryan Geldim', duration: '3:38' },
  ];
};

export const selectedSongsReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
