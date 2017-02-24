//@flow
'use strict';
import { combineReducers } from 'redux-immutable';
import rootNavReducer from './navReducer';
import tabReducer from './tabReducer';
import testReducer from './testReducer';
import apiReducer from './apiReducer';

// const rootReducer = combineReducers({testReducer: testReducer});
const rootReducer = combineReducers({ tabState: tabReducer, rootNavState: rootNavReducer, testState: testReducer, apiState: apiReducer });

export default rootReducer;
