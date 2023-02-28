import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { currentSpotReducer } from './ducks/CurrentSpotReducer/CurrentSpotReducer';
import { spotsListReducer } from './ducks/SpotsListReducer/SpotsListReducer';

export type ApplicationState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  currentSpotReducer,
  spotsListReducer,
});

export const store = configureStore({
  reducer: {
    currentSpotReducer,
    spotsListReducer,
  },
});
