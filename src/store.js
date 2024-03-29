// store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // If using asynchronous actions
import rootReducer from './Redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
