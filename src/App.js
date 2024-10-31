import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './components/MovieCard'
import { fetchMovie } from './redux/actions/actions';
import './styles/styles.css';


function App() {
    const dispatch = useDispatch();
    const title = useSelector((state) => state.movie.title);
    const posterPath = useSelector((state) => state.movie.poster_path);
    const imageUrl = useSelector((state) => state.movie.imageUrl);
    const status = useSelector((state) => state.movie.status);
    const error = useSelector((state) => state.movie.error);
    
    const [count, setCount] = useState(1);
    const [save, saveMovie] = useState(null)

    const handleNewMovie = () => {
        if (count === 4) {
            alert("Warning: You can only get one more random movie!")
        }
        if (count < 5) {
            dispatch(fetchMovie());
            setCount(count+1);
        } else {
            alert('Error: You have reached the limit of 5 movie suggestions')
        }
    }
    useEffect(() => {
        dispatch(fetchMovie())
    }, [dispatch]);


    return (
        <div className="container">
            <h1>Movie Roulette</h1>
            <button className="generate-button" onClick={handleNewMovie} disabled={status === 'loading'}>
                Generate New Movie
            </button>
            <button className="save-button">Save movie for later</button>
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {title && posterPath && (
                <div className="image-container">
                <img src={imageUrl} alt={title}  className="movie-poster"/>
                </div>
            )}
        </div>
    );
}

export default App;