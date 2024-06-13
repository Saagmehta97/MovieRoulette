
// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_KEY = '9db24e1ccb91256749ea0bbec5304937';
const BASE_URL = 'https://api.themoviedb.org/3';
const image_url = 'https://image.tmdb.org/t/p/w500';


export const getMovies = async () => {
    try {
        console.log('Making API call to fetch movie data')
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        if (!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`)
        }
        const data = await response.json();
        console.log('Recieved data; ', data);
        return data.results;
    } catch(error) {
        console.log("error fetching movie data", error);
        throw error;
    }
};

export const getImageUrl = (posterPath) => {
    return `${image_url}${posterPath}`;
};
