import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { fetchMoviesByGenre } from '../api/movieService';


function MovieList() {
    const [genre, setGenre] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const data = await fetchMoviesByGenre(genre);
            setMovies(data);
        }
        getMovies();
    }, [genre])

    return (
        <div>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">All Genres</option>
                <option value="28">Action</option>
                <option value="35">Comedy</option>
                {/* Add more genres */}
            </select>
            <div style={{ display: 'flex', flexwrap: 'wrap' }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MovieList;