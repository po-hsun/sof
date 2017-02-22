//@flow
'use strict';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import tabReducer from '../reducers/tabReducer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger( );

const store = function configureStore( ) {
    const store = createStore(rootReducer, applyMiddleware( thunk, logger ));

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
