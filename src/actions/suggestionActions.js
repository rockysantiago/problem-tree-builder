import { getWordSuggestions } from 'api/ptg';
import * as types from 'constants/actionTypes';

export const retrieveSuggestions = keyword => {
  return dispatch => {
    dispatch({ type: types.GET_SUGGESTIONS });

    return getWordSuggestions(keyword)
      .then(payload => {
        dispatch({
          type: types.SET_SUGGESTIONS,
          payload
        });
      })
      .catch(err => console.error('Suggestion fetch error: ', err));
  };
};
