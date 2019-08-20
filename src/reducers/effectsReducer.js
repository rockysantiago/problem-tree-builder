import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function causesReducer(state = initialState.effects, action) {
  switch (action.type) {
    case types.GET_EFFECTS:
      return Object.assign({}, state, { isFetching: true });

    case types.SET_EFFECTS:
      return Object.assign({}, { isFetching: false, data: action.payload });

    case types.INIT_EFFECTS:
      return Object.assign({}, initialState.effects);

    default:
      return state;
  }
}
