import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function causesReducer(state = initialState.causes, action) {
  switch (action.type) {
    case types.SET_CAUSES:
      return Object.assign([], action.payload);
    
    case types.INITIAL_STATE:
      return Object.assign([], initialState.causes);

    default:
      return state;
  }
}
