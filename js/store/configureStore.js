//@flow
'use strict';
import { createStore } from 'redux';
import tabReducer from '../reducers/tabReducer'

module.exports = createStore(tabReducer);
