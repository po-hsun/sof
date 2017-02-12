//@flow
'use strict';
import { createStore } from 'redux';
import rootReducer from '../reducers'
import tabReducer from '../reducers/tabReducer'

module.exports = createStore(tabReducer);
