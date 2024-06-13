import { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } from '../../constants/actionTypes';

const initialState = {
    title: null, 
    poster_path: null,
    image_url: null,
    status: 'idle',
    error: null,
};

const movieReducer = (state = initialState, action) => {
    console.log('Action: ', action);
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                status: 'loading',
                error: null,
            };
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                status: 'succeeded',
                title: action.payload.title,
                poster_path: action.payload.poster_path,
                imageUrl: action.payload.imageUrl,
                error: null, 
            };
        case FETCH_MOVIE_FAILURE:
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