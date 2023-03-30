import countReducer from './counterReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  countReducer,
});

export default rootReducer
