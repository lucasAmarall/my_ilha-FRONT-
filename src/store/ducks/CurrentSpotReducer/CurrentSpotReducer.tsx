import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE: TCurrentSpotReducer = {
  store: null,
  id: '',
  name: '',
};

export const updateCurrentSpot = createAction<TCurrentSpotReducer>(
  'UPDATE_CURRENT_SPOT',
);

const currentSpotReducer = createReducer<TCurrentSpotReducer>(INITIAL_STATE, {
  [updateCurrentSpot.type]: (state, { payload }) => {
    return {
      ...state,
      ...payload,
    };
  },
});

export { currentSpotReducer };
