import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function topicReducer(state = initialState.topic, action) {
  switch (action.type) {
    case types.SET_FETCHING:
      return Object.assign({}, state, { isFetching: true });

    case types.SET_TOPIC:
      return Object.assign({}, state, action.payload);

    case types.SET_CAUSES:
      return Object.assign({}, state, {
        isFetching: false,
        _sourceCauses: action.payload
      });

    case types.SET_EFFECTS:
      return Object.assign({}, state, {
        isFetching: false,
        _sourceEffects: action.payload
      });

    case types.SELECT_CAUSE:
      const newCauses = Object.assign([], state._sourceCauses)
        .map((s, idx) => {
          return action.idx === idx
            ? Object.assign({}, s, { selected: !s.selected, _listIndex: idx })
            : Object.assign({}, s, { _listIndex: idx });
        });
      
      return Object.assign({}, state, {
        _sourceCauses: newCauses,
        causes: newCauses.filter(s => s.selected)
      });

    case types.SELECT_EFFECT:
      const newEffects = Object.assign([], state._sourceEffects)
        .map((s, idx) => {
          return action.idx === idx
            ? Object.assign({}, s, { selected: !s.selected, _listIndex: idx })
            : Object.assign({}, s, { _listIndex: idx });
        });
      
      return Object.assign({}, state, {
        _sourceEffects: newEffects,
        effects: newEffects.filter(s => s.selected)
      });

    case types.SET_SUB_CAUSES:
      const newCausesWithSub = Object.assign([], state._sourceCauses)
        .map((cause, idx) => {
          if (action.idx === idx) {
            cause._sources = action.payload.map((subCause, sIdx) => Object.assign({}, subCause, { _listIndex: sIdx }));
            cause._data = cause._sources.filter(item => item.selected);
          }
          return action.activeIndex === idx
            ? Object.assign({}, cause, { selected: true, })
            : Object.assign({}, cause);
        });
      
      return Object.assign({}, state, {
        _sourceCauses: newCausesWithSub,
        isFetching: false,
        causes: newCausesWithSub.filter(s => s.selected)
      });

    case types.SET_SUB_EFFECTS:
      const newEffectsWithSub = Object.assign([], state._sourceEffects)
        .map((effect, idx) => {
          if (action.idx === idx) {
            effect._sources = action.payload.map((subEffect, sIdx) => Object.assign({}, subEffect, { _listIndex: sIdx }));
            effect._data = effect._sources.filter(item => item.selected);

          }
          return action.activeIndex === idx
            ? Object.assign({}, effect, { selected: true, })
            : Object.assign({}, effect);
        });
      
      return Object.assign({}, state, {
        _sourceEffects: newEffectsWithSub,
        isFetching: false,
        effects: newEffectsWithSub.filter(s => s.selected)
      });
    
    case types.SELECT_SUB_EFFECT:
      const effectListIndex = state.effects[state.activeIndex]._listIndex;
      const newEffectsWithSubSelection = Object.assign([], state._sourceEffects)
        .map((effect, idx) => {
          if (effectListIndex === idx) {
            effect._sources = effect._sources.map((subEffect, sIdx) => {
              return action.idx === sIdx
                ? Object.assign({}, subEffect, { selected: !subEffect.selected })
                : Object.assign({}, subEffect);
            });
            effect._data = effect._sources.filter(item => item.selected);
          }
          return effect;
        });
      
      return Object.assign({}, state, {
        _sourceEffects: newEffectsWithSubSelection,
        isFetching: false,
        effects: newEffectsWithSubSelection.filter(s => s.selected)
      });
    
    case types.SELECT_SUB_CAUSE:
      const causeListIndex = state.causes[state.activeIndex]._listIndex;
      const newCausesWithSubSelection = Object.assign([], state._sourceCauses)
        .map((cause, idx) => {
          if (causeListIndex === idx) {
            cause._sources = cause._sources.map((subCause, sIdx) => {
              return action.idx === sIdx
                ? Object.assign({}, subCause, { selected: !subCause.selected })
                : Object.assign({}, subCause);
            });
            cause._data = cause._sources.filter(item => item.selected);
          }
          return cause;
        });

      return Object.assign({}, state, {
        _sourceCauses: newCausesWithSubSelection,
        isFetching: false,
        causes: newCausesWithSubSelection.filter(s => s.selected)
      });

    case types.INITIAL_STATE:
      return Object.assign({}, initialState.topic);

    default:
      return state;
  }
}
