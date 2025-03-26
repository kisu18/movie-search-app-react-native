import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '.../components/SearchBar';
import MovieList from '../components/MovieList';
import { fetchMovies } from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    const movieData = await fetchMovies(searchQuery);
    setMovies(movieData.Search);
    setPage(1);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const movieData = await fetchMovies(searchQuery, nextPage);
    setMovies([...movies, ...movieData.Search]);
    setPage(nextPage);
  };

  const handleMoviePress = (movie) => {
    navigation.navigate('MovieDetail', { movieId: movie.imdbID });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      <MovieList
        movies={movies}
        onMoviePress={handleMoviePress}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default HomeScreen;