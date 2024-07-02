import { configureStore } from '@reduxjs/toolkit';
import dogReducer from './dog';

export const store = configureStore({
  reducer: {
    dog: dogReducer,
  },
});



