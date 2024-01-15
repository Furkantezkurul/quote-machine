import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
  // Add other reducers here if needed
  quote: quoteReducer,
});

export default rootReducer;