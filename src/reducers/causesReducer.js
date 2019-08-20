import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function causesReducer(state = initialState.causes, action) {
  switch (action.type) {
    case types.GET_CAUSES:
      return Object.assign({}, state, { isFetching: true });

    case types.SET_CAUSES:
      return Object.assign({}, { isFetching: false, data: action.payload });
    
    case types.INIT_CAUSES:
      return Object.assign({}, initialState.causes);

    default:
      return state;
  }
}
