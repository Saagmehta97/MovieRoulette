import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function MovieCard({ movie }) {
    const { auth } = useContext(AuthContext);

    const addToWatchLater = async () => {
        await fetch('/api/user/watchlater', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': auth.token,
            },
            body: JSON.stringify({ movieId: movie.id }), 
        });
        alert('Added to Watch Later')
    };

    return (

        <div style={{ margin: '10px' }}>
            <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <button onClick={addToWatchLater}>Add to Watch Later</button>
        </div>
    );
}
export default MovieCard;