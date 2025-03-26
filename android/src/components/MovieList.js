import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onMoviePress, onEndReached }) => {
  return (
    <FlatList
      data={movies}
      renderItem={({ item }) => <MovieItem movie={item} onPress={() => onMoviePress(item)} />}
      keyExtractor={(item) => item.imdbID}
      style={styles.list}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
  },
});

export default MovieList;