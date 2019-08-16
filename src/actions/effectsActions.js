import * as types from '../constants/actionTypes';

export const searchEffects = (keyword) => {
  return dispatch => {
    return Promise.resolve({ data: [ "test" ] })
      .then(result => {
        dispatch({
          type: types.SET_EFFECTS,
          payload: result.data
        })
      })
      .catch(err => console.log('Effects fetch error: ', err));
  };
};