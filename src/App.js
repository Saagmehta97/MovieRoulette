import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './components/MovieCard'
import { fetchMovie } from './redux/actions/actions';
import './styles/styles.css';


function App() {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movie.title);
    const posterPath = useSelector((state) => state.movie.poster_path);
    const status = useSelector((state) => state.movie.status);
    const error = userSelector((state) => state.movie.error);
    
    const [count, setCount] = useState(0);

    const handleNewMovie = () => {
        if (count < 3) {
            dispatch(fetchMovie);
            setCount(count+1);
        } else {
            alert('Error: You have reached the limit of 3 movie suggestions')
        }
    }

    return (
        <div className="App">
            <h1>Movie Generator</h1>
            <button onClick={handleNewMovie} disabled={status === 'loading'}>
                Generate Movie
            </button>
        </div>
    );

}

export default App;