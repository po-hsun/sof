//@flow
'use strict';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import tabReducer from '../reducers/tabReducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import createReduxPromiseMiddleware from 'redux-promise-middleware';

const logger = createLogger( );
const reduxPromiseMiddleware = createReduxPromiseMiddleware( );

const store = function configureStore( ) {
    const store = createStore(rootReducer, applyMiddleware( reduxPromiseMiddleware, logger ));

    if ( module.hot ) {
        module.hot.accept(( ) => {
            const nextRootReducer = require( '../reducers' ).default;
            store.replaceReducer( nextRootReducer );
        });
    }
    return store;
};

export default store( );

// module.exports = createStore(rootReducer, applyMiddleware( logger ));
