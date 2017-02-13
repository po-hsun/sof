//@flow
'use strict';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import tabReducer from '../reducers/tabReducer';
import createLogger from 'redux-logger';

const logger = createLogger( );

module.exports = createStore(tabReducer, applyMiddleware( logger ));
