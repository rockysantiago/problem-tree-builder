import * as types from '../constants/actionTypes';
import { getProblems } from 'api/ptg';

export const searchProblems = (keyword) => {
  return dispatch => {
    return getProblems(keyword, 'problem')
      .then(result => {
        console.log(`RESULT - ${keyword}: `, result);
        dispatch({
          type: types.SET_PROBLEMS,
          payload: result.data
        })
      })
      .catch(err => console.log('Problems fetch error: ', err));
  };
};