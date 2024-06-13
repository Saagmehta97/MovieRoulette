
// const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const API_KEY = '9db24e1ccb91256749ea0bbec5304937';
const base_url = 'https://api.themoviedb.org/3';
const image_url = 'https://image.tmdb.org/t/p/w500';
const bearer_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGIyNGUxY2NiOTEyNTY3NDllYTBiYmVjNTMwNDkzNyIsInN1YiI6IjY2NjlkNTY2OWMwOTk4ZmYzMDFjNjIyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lf9sTUgzfT6nC6QmFekMFgSZAFpmhPuDjj4cIA8nsI8'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${bearer_token}`
    }
}

export const getMovies = async () => {
    await fetch(`${base_url}/genre/movie/list?language=en'`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    // try {
    //     console.log('Making API call to fetch movie data')
    //     const response  = await fetch(`${base_url}/genre/movie/list?language=en'`, options);
    //     if (!response.ok) {
    //         throw new Error(`HTTP error, status: ${response.status}`)
    //     }
    //     const data = await response.json();
    //     console.log('Recieved data; ', data);
    //     return data.results;
    // }
    // catch(error) {
    //     console.log("error fetching movie data", error);
    //     throw error;
    // }
}
export const getImageUrl = (posterPath) => {
    return `${image_url}${posterPath}`;
}
