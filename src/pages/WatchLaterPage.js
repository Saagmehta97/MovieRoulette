import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import MovieCard from '../components/MovieCard';


function WatchLaterPage() {
    const { auth } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchWatchLaterMovies = async () => {
            const response = await fetch('/api/user/watchlater', {
                headers: {
                    'x-auth-token': auth.token,
                },
            });
            const movieIds = await response.json();
            
            // Fetch movie details for each ID
            const moviePromises = movieIds.map((id) => 
                fetch(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_TMDB_API_KEY`
                ).then((res) => res.json())
            );

            const movieData = await Promise.all(moviePromises);
            setMovies(movieData);
        }

        fetchWatchLaterMovies();
    }, [auth.token]);

    return (
        <div>
            <h1>Watch Later</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
}

export default WatchLaterPage;