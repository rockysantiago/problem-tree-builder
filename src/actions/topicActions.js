import * as types from 'constants/actionTypes';
import { getProblems, sendUserScore } from 'api/ptg';

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
};

export const selectSubOption = (parentIndex, selectedIndex, activeType) => {
  const SEARCH_TYPES = {
    'sub-cause': types.SELECT_SUB_CAUSE,
    'sub-effect': types.SELECT_SUB_EFFECT
  };

  return dispatch => {
    dispatch({
      type: SEARCH_TYPES[activeType],
      parentIndex,
      idx: selectedIndex
    });
  };
};

export const searchSubOptions = (keyword, searchType, idx, shouldFetch) => {
  const SEARCH_TYPES = {
    cause: types.SET_SUB_CAUSES,
    effect: types.SET_SUB_EFFECTS
  };

  return dispatch => {
    if (shouldFetch) {
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
    }
  };
};

export const setFilter = (value, field) => {
  return dispatch => {
    dispatch({
      type: types.SET_FILTER,
      payload: {
        value,
        field
      }
    });
  };
};

export const clear = (activeType, idx) => {
  return dispatch => {
    if (activeType === 'problem') {
      dispatch({ type: types.CLEAR_PROBLEM_SELECTION });
    } else {
      dispatch({ type: types.CLEAR_CAUSE_EFFECT_SELECTION });
    }
  };
};

export const updateOption = (type, index, childIndex, payload) => {
  const UPDATE_TYPE = {
    cause: types.UPDATE_CAUSE,
    'sub-cause': types.UPDATE_SUB_CAUSE,
    effect: types.UPDATE_EFFECT,
    'sub-effect': types.UPDATE_SUB_EFFECT
  };

  return dispatch =>
    dispatch({
      type: UPDATE_TYPE[type],
      index,
      childIndex,
      payload
    });
};

export const switchView = view => dispatch =>
  dispatch({ type: types.SWITCH_VIEW, view });

export const updateUserScore = (stars, id) => {
  return async dispatch => {
    dispatch({ type: types.UPDATE_USER_SCORE });
    await sendUserScore(stars, id);
  };
};
