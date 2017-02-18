//@flow
'use strict';
import { combineReducers } from 'redux';
import rootNavReducer from './navReducer';
import tabReducer from './tabReducer';
import testReducer from './testReducer';

//const rootReducer = combineReducers({tabState: tabReducer});
const rootReducer = combineReducers({ tabState: tabReducer, rootNavState: rootNavReducer, testState: testReducer });

export default rootReducer;
