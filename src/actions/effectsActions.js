import * as types from 'constants/actionTypes';
import { getProblems } from 'api/ptg';

export const searchEffects = keyword => {
  return dispatch => {
    dispatch({ type: types.GET_EFFECTS });
    return getProblems(keyword, 'effect')
      .then(result => {
        dispatch({
          type: types.SET_EFFECTS,
          payload: result.filter(r => r.type === 'effect')
        });
      })
      .catch(err => console.error('Effects fetch error: ', err));
  };
};

export const selectEffect = (index, effects) => {
  return dispatch => {
    const newEffects = effects.map((effect, idx) => {
      return index === idx
        ? Object.assign({}, effect, { selected: !effect.selected })
        : Object.assign({}, effect);
    });

    dispatch({
      type: types.SET_TOPIC,
      payload: {
        effects: newEffects.filter(effect => effect.selected)
      }
    });

    dispatch({
      type: types.SET_EFFECTS,
      payload: newEffects
    });
  };
};
