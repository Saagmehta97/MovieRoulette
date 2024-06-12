import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../api/movieService';

//Action type constants
const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

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

