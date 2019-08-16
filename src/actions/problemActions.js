import * as types from '../constants/actionTypes';
import { getProblems } from 'api/ptg';
import problems from 'api/problems.json';

export const searchProblems = (keyword) => {
  return dispatch => {
    dispatch({ type: types.GET_PROBLEMS  });
    // return getProblems(keyword, 'problem')
    return Promise.resolve(problems)
      .then(result => {
        console.log(`RESULT - ${keyword}: `, result);
        dispatch({
          type: types.SET_PROBLEMS,
          payload: result
        });
      })
      .catch(err => console.log('Problems fetch error: ', err));
  };
};