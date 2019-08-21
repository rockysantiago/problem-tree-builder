import { combineReducers } from 'redux';
import problemsReducer from './problemsReducer';
import topicReducer from './topicReducer';

const rootReducer = combineReducers({
  topic: topicReducer,
  problems: problemsReducer
});

export default rootReducer;
