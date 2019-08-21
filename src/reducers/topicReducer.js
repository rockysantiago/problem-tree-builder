import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function topicReducer(state = initialState.topic, action) {
  switch (action.type) {
    case types.SET_FETCHING:
      return Object.assign({}, state, { isFetching: true });

    case types.SET_TOPIC:
      return Object.assign({}, state, action.payload);

    case types.SET_CAUSES:
      return Object.assign({}, state, {
        isFetching: false,
        _sourceCauses: action.payload
      });

    case types.SET_EFFECTS:
      return Object.assign({}, state, {
        isFetching: false,
        _sourceEffects: action.payload
      });

    case types.SET_SUB_CAUSES:
      const causes = state.causes.map((cause, idx) => {
        return action.idx === idx
          ? Object.assign({}, cause, { _source: action.payload })
          : cause;
      });
      return Object.assign({}, state, {
        isFetching: false,
        activeIndex: action.idx,
        causes
      });

    case types.SET_SUB_EFFECTS:
      const effects = state.effects.map((effect, idx) => {
        return action.idx === idx
          ? Object.assign({}, effect, { _source: action.payload })
          : effect;
      });
      return Object.assign({}, state, {
        isFetching: false,
        activeIndex: action.idx,
        effects
      });

    case types.INITIAL_STATE:
      return Object.assign({}, initialState.topic);

    default:
      return state;
  }
}
