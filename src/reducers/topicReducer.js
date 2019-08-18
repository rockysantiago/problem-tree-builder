import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function topicReducer(state = initialState.topic, action) {
  switch (action.type) {
    case types.SET_TOPIC:
      return Object.assign({}, state, action.payload);

    case types.INITIAL_STATE:
      return Object.assign({}, initialState.topic);

    default:
      return state;
  }
}
