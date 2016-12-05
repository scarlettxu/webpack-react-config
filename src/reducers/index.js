import { combineReducers } from 'redux';

import { getUserName } from './modules';
const rootReducer = combineReducers({
  userName: getUserName,
});
export default rootReducer;
