import { combineReducers } from 'redux';
import causesReducer from './causesReducer';
import effectsReducer from './effectsReducer';
import problemsReducer from './problemsReducer';
import topicReducer from './topicReducer';

const rootReducer = combineReducers({
  topic: topicReducer,
  problems: problemsReducer,
  causes: causesReducer,
  effects: effectsReducer
});

export default rootReducer;
