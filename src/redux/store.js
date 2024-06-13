import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movieReducer';

const store = configureStore({
    reducer: {
      movie: movieReducer,
      // if we had other reducers, they would go here
    },
  });

export default store;