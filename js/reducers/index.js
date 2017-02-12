//@flow
'use strict';
import { combineReducers } from 'redux';
import navReducer from './navReducer';
import tabReducer from './tabReducer';

const rootReducer = combineReducers({ navReducer, tabReducer });

export default rootReducer;
