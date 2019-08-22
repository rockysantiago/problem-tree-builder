import * as types from 'constants/actionTypes';
import { getProblems } from 'api/ptg';

export const setTopic = payload => {
  return dispatch => {
    dispatch({ type: types.SET_TOPIC, payload });
  };
};

export const searchOptions = (keyword, searchType) => {
  const SEARCH_TYPES = {
    cause: types.SET_CAUSES,
    effect: types.SET_EFFECTS
  };

  return dispatch => {
    dispatch({ type: types.SET_FETCHING });
    return getProblems(keyword, searchType)
      .then(result => {
        dispatch({
          type: SEARCH_TYPES[searchType],
          payload: result
        });
      })
      .catch(err => console.error(`Options ${searchType} fetch error: `, err));
  };
};

export const selectOption = (index, type) => {
  const SELECTION_TYPE = {
    cause: types.SELECT_CAUSE,
    effect: types.SELECT_EFFECT
  };

  return dispatch => {
    dispatch({
      type: SELECTION_TYPE[type],
      idx: index
    });
  };
}

export const selectSubOption = (selectedIndex, activeType) => {
  const SEARCH_TYPES = {
    'sub-cause': types.SELECT_SUB_CAUSE,
    'sub-effect': types.SELECT_SUB_EFFECT
  };

  return dispatch => {
    dispatch({
      type: SEARCH_TYPES[activeType],
      idx: selectedIndex
    });
  };
};

export const searchSubOptions = (keyword, searchType, idx) => {
  const SEARCH_TYPES = {
    cause: types.SET_SUB_CAUSES,
    effect: types.SET_SUB_EFFECTS
  };

  return dispatch => {
    dispatch({ type: types.SET_FETCHING });
    return getProblems(keyword, searchType)
      .then(result => {
        dispatch({
          type: SEARCH_TYPES[searchType],
          payload: result,
          idx
        });
      })
      .catch(err => console.error(`Sub ${searchType} fetch error: `, err));
  };
};
