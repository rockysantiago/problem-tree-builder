import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function problemsReducer(state = initialState.problems, action) {
  switch (action.type) {
    case types.SET_PROBLEMS:
      return Object.assign([], action.payload);
    
    case types.INITIAL_STATE:
      return Object.assign([], initialState.problems);

    default:
      return state;
  }
}
