import { fetchMovieRequest, fetchMovieSuccess, fetchMovieFailure} from "../actions/actions";

const initialState = {
    title: null, 
    poster_path: null,
    status: '',
    error: null,
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case fetchMovieRequest:
            return {
                ...state,
                status: 'loading',
                error: null,
            };
        case fetchMovieSuccess:
            return {
                ...state,
                status: 'succeeded',
                title: action.payload.title,
                poster_path: action.payload.poster_path,
                error: null, 
            };
        case fetchMovieFailure:
            return {
                ...state,
                status: 'failed',
                error: action.payload,
            };
        default:
            return state;
    }
};


export default movieReducer;