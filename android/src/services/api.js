import axios from 'axios';

const API_KEY = 'your_omdb_api_key';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (title, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}?s=${title}&page=${page}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
