import axios from 'axios';

export const getMovies = async () => {
   return await axios.get('https://api.themoviedb.org/3/movie/');
}