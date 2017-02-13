//@flow
'use strict';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import tabReducer from '../reducers/tabReducer';
import createLogger from 'redux-logger';

const logger = createLogger( );

module.exports = createStore(rootReducer, applyMiddleware( logger ));
