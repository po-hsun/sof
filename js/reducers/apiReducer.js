//@flow
'use strict';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/constants';
import Immutable from 'immutable';

const InitialState = Immutable.Record({ data: [], dataFetched: false, isFetching: false, error: false });

const initialState = new InitialState( );

export default function dataReducer( state = initialState, action ) {
    switch ( action.type ) {
        case FETCHING_DATA:
            return state.set('data', [ ]).set( 'isFetching', true );
            // return {
            //     ...state,
            //     data: [],
            //     isFetching: true
            // }
        case FETCHING_DATA_SUCCESS:
            return state.set( 'isFetching', false ).set( 'data', action.data );
            // return {
            //     ...state,
            //     isFetching: false,
            //     data: action.data
            // }
        case FETCHING_DATA_FAILURE:
            return state.set( 'isFetching', false ).set( 'error', true );
            // return {
            //     ...state,
            //     isFetching: false,
            //     error: true
            // }
        default:
            return state;
    }
}
