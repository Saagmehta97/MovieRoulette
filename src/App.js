import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './components/MovieCard'
import { fetchMovie } from './redux/actions/actions';
import './styles/styles.css';


function App() {
    const dispatch = useDispatch();
    const title = useSelector((state) => state.movie.title);
    const posterPath = useSelector((state) => state.movie.poster_path);
    const status = useSelector((state) => state.movie.status);
    const error = useSelector((state) => state.movie.error);
    
    const [count, setCount] = useState(1);

    const handleNewMovie = () => {
        if (count === 2) {
            alert("Warning: You can only get one more random movie!")
        }
        if (count < 3) {
            dispatch(fetchMovie);
            setCount(count+1);
        } else {
            alert('Error: You have reached the limit of 3 movie suggestions')
        }
    }
    useEffect(() => {
        dispatch(fetchMovie)
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Movie Generator</h1>
            <button onClick={handleNewMovie} disabled={status === 'loading'}>
                Generate Movie
            </button>
            <div>
            {status === 'loading' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {title && posterPath && (
                <MovieCard title={title} imageUrl={`https://image.tmdb.org/t/p/w500${posterPath}`} />
            )}
            </div>
        </div>
    );
}

export default App;