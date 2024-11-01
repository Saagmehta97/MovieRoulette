
// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_KEY = 'REACT_APP_TMDB_API_KEY';


export const fetchMoviesByGenre = async (genre) => {
    const genreParam = genre ? `&with_genres=${genre}` : '';
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}${genreParam}`
    );
    const data = await response.json();
    return data.results;
  };
