
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const base_url = 'https://api.themoviedb.org/3';

export const getImageUrl = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`
}

export const getMovies = async () => {
    try {
        const response  = await fetch(`${base_url}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        //console.log(data);
        return data.results;
    }
    catch(error) {
        console.log("error fetching movie data", error);
        throw error;
    }
}
