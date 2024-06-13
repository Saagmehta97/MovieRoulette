import React from 'react';

function MovieCard({ title, imageUrl }) {
    return (
        <div className="movie-card">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title}></img>
        </div>
    );
}

export default MovieCard;