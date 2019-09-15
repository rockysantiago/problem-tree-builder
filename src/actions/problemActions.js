import { getProblems } from 'api/ptg';
import * as types from 'constants/actionTypes';

export const searchProblems = keyword => {
  return dispatch => {
    dispatch({ type: types.GET_PROBLEMS });
    dispatch({
      type: types.SET_TOPIC,
      payload: {
        keyword,
        activeType: 'problem',
        effects: [],
        causes: [],
        _sourceEffects: [],
        _sourceCauses: [],
        problem: {}
      }
    });

    return getProblems(keyword, 'problem')
      .then(payload => {
        dispatch({
          type: types.SET_PROBLEMS,
          payload
        });
      })
      .catch(err => console.error('Problems fetch error: ', err));
  };
};

/**
 * Handles the logic for selecting a problem from the list
 * of problems. Sets a new value for problems list with 'selected'
 * keyword and topic.problem
 *
 * @param {number} index
 * Position of the item selected within the list of problems
 *
 * @param {Array} problems
 * List of problems
 */
export const selectProblem = (index, problems) => {
  return dispatch => {
    const newProblems = problems.map((problem, idx) => {
      return index === idx
        ? Object.assign({}, problem, { selected: true })
        : Object.assign({}, problem, { selected: false });
    });

    dispatch({
      type: types.SET_TOPIC,
      payload: {
        problem: newProblems.filter(problem => problem.selected)[0],
        activeType: 'problem',
        effects: [],
        causes: [],
        _sourceEffects: [],
        _sourceCauses: []
      }
    });

    dispatch({
      type: types.SET_PROBLEMS,
      payload: newProblems
    });
  };
};

export const updateProblem = (index, payload) => dispatch => {
  dispatch({ type: types.UPDATE_PROBLEM, index, payload });
};
