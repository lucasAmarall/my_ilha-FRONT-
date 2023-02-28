import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE: TSpotsListReducer = {
  spots: [],
  active_id: '',
};

export const setActiveSpotId = createAction<string>('SET_ACTIVE_SPOT_ID');
export const addSpotToList = createAction<TAddOrRemoveSpotToList>('ADD_SPOT');
export const removeSpotToList =
  createAction<TAddOrRemoveSpotToList>('REMOVE_SPOT');

const spotsListReducer = createReducer<TSpotsListReducer>(INITIAL_STATE, {
  [addSpotToList.type]: (state, { payload }) => {
    return {
      ...state,
      spots: [...state.spots, payload.spot],
      active_id: payload.spot.id,
    };
  },
  [setActiveSpotId.type]: (state, { payload }) => {
    return {
      ...state,
      active_id: payload,
    };
  },
});

export { spotsListReducer };
