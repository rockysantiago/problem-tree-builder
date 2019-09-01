import { combineReducers } from 'redux';
import problemsReducer from './problemsReducer';
import topicReducer from './topicReducer';
import suggestionsReducer from './suggestionsReducer';

const rootReducer = combineReducers({
  topic: topicReducer,
  problems: problemsReducer,
  suggestions: suggestionsReducer
});

export default rootReducer;
