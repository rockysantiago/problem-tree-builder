import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function causesReducer(state = initialState.effects, action) {
  switch (action.type) {
    case types.SET_EFFECTS:
      return Object.assign([], action.payload);
    
    case types.INITIAL_STATE:
      return Object.assign([], initialState.effects);

    default:
      return state;
  }
}
