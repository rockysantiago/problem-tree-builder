import * as types from 'constants/actionTypes';
import { getProblems } from 'api/ptg';

export const searchCauses = keyword => {
  return dispatch => {
    dispatch({ type: types.GET_CAUSES });
    return getProblems(keyword, 'cause')
      .then(result => {
        dispatch({
          type: types.SET_CAUSES,
          payload: result.filter(r => r.type === 'cause')
        });
      })
      .catch(err => console.error('Causes fetch error: ', err));
  };
};

export const selectCause = (index, causes) => {
  return dispatch => {
    const newCauses = causes.map((cause, idx) => {
      return index === idx
        ? Object.assign({}, cause, { selected: !cause.selected })
        : Object.assign({}, cause);
    });

    dispatch({
      type: types.SET_TOPIC,
      payload: {
        causes: newCauses.filter(cause => cause.selected)
      }
    });

    dispatch({
      type: types.SET_CAUSES,
      payload: newCauses
    });
  };
};
