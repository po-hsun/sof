//@flow
'use strict';
import { combineReducers } from 'redux';
import navReducer from './navReducer';
import tabReducer from './tabReducer';

var tabState = {
  ...tabReducer,
  navState: navReducer
};

var rootState = {
  tabState: tabState
};
const rootReducer = combineReducers({tabState: tabReducer});
// const rootReducer = combineReducers({ tabState: tabReducer, navState: navReducer });

export default rootReducer;
