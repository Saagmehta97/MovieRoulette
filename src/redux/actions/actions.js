// import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies, getImageUrl } from '../../api/movieService';

//Action type constants
import {
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS, 
    FETCH_MOVIE_FAILURE 
} from '../../constants/actionTypes';


export const fetchMovieRequest = () => ({
    type: FETCH_MOVIE_REQUEST,
});

export const fetchMovieSuccess = (movie) => ({
    type: FETCH_MOVIE_SUCCESS,
    payload: movie,
});

export const fetchMovieFailure = (error) => ({
    type: FETCH_MOVIE_FAILURE,
    payload: error,
});

export const fetchMovie = () => {
    return async (dispatch) => {
        dispatch(fetchMovieRequest());
        try {
            const movies = await getMovies();
            console.log("Getting movie:", movies);
            const randomMovie = movies[Math.floor(Math.random() * movies.length)];
            randomMovie.imageUrl = getImageUrl(randomMovie.poster_path);
            dispatch(fetchMovieSuccess(randomMovie))
        }
        catch (error) {
            console.error("Getting error:", error);
            dispatch(fetchMovieFailure(error.message));
        }
    };
};

