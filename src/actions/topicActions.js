import * as types from 'constants/actionTypes';
import { getProblems } from 'api/ptg';
import { SearchResult } from 'semantic-ui-react';

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

export const selectOption = (index, optionType, options) => {
  const SEARCH_TYPES = {
    causes: types.SET_CAUSES,
    effects: types.SET_EFFECTS
  };

  return dispatch => {
    const newOptions = options.map((option, idx) => {
      return index === idx
        ? Object.assign({}, option, { selected: !option.selected })
        : Object.assign({}, option);
    });

    dispatch({
      type: types.SET_TOPIC,
      payload: {
        [`${optionType}`]: newOptions.filter(option => option.selected)
      }
    });

    dispatch({
      type: SEARCH_TYPES[optionType],
      payload: newOptions
    });
  };
};

// TODO:
export const selectSubOption = (index, optionType, options) => {
  // const SEARCH_TYPES = {
  //   'sub-cause': types.SET_SUB_CAUSES,
  //   'sub-effect': types.SET_SUB_EFFECTS
  // };

  // return dispatch => {
  //   const newOptions = options.map((option, idx) => {
  //     return index === idx
  //       ? Object.assign({}, option, { selected: !option.selected })
  //       : Object.assign({}, option);
  //   });

  //   dispatch({
  //     type: types.SET_TOPIC,
  //     payload: {
  //       [`${optionType}`]: newOptions.filter(option => option.selected)
  //     }
  //   });

  //   dispatch({
  //     type: SEARCH_TYPES[optionType],
  //     payload: newOptions
  //   });
  // };
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