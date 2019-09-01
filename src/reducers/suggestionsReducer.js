import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function suggestionsReducer(
  state = initialState.suggestions,
  action
) {
  switch (action.type) {
    case types.GET_SUGGESTIONS:
      return Object.assign([], state, { isFetching: true });

    case types.SET_SUGGESTIONS:
      return Object.assign({}, { isFetching: false, data: action.payload });

    case types.INITIAL_STATE:
      return Object.assign([], initialState.suggestions);

    default:
      return state;
  }
}
