//@flow
'use strict';
import {
    FETCHING_DATA,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,
    FETCH_DATA_PENDING,
    FETCH_DATA_FULFILLED,
    FETCH_DATA_REJECTED
} from '../constants/constants';
import Immutable from 'immutable';

const InitialState = Immutable.Record({ data: [], dataFetched: false, isFetching: false, error: false });

const initialState = new InitialState( );

export function dataReducer( state = initialState, action ) {
    switch ( action.type ) {
        case FETCHING_DATA:
            return state.set('data', [ ]).set( 'isFetching', true );
        case FETCHING_DATA_SUCCESS:
            return state.set( 'isFetching', false ).set( 'data', action.data ).set( 'error', false );
        case FETCHING_DATA_FAILURE:
            return state.set( 'isFetching', false ).set( 'error', true );
        default:
            return state;
    }
}

export default function dataReducerByReduxPromiseMiddleware( state = initialState, action ) {
    switch ( action.type ) {
        case FETCH_DATA_PENDING:
            return state.set('data', [ ]).set( 'isFetching', true );
        case FETCH_DATA_FULFILLED:
            return state.set( 'isFetching', false ).set( 'data', action.payload ).set( 'error', false );
        case FETCH_DATA_REJECTED:
            return state.set( 'isFetching', false ).set( 'error', true );
        default:
            return state
    }
}
