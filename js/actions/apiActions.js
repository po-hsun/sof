//@flow
'use strict';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCH_DATA } from '../constants/constants';
import getPeople from '../api';

export function getData( ) {
    return { type: FETCHING_DATA }
}

export function getDataSuccess( data ) {
    return { type: FETCHING_DATA_SUCCESS, data }
}

export function getDataFailure( ) {
    return { type: FETCHING_DATA_FAILURE }
}

export function fetchData( ) {
    return ( dispatch : Function ) => {
        dispatch(getData( ));
        getPeople( ).then(( data ) => {
            dispatch(getDataSuccess( data ))
        }).catch(( err ) => {
            dispatch(getDataFailure( ));
        }).done( );
    }
}

export default function fetchDataByReduxPromiseMiddleware( ) {
    return {
        type: FETCH_DATA,
        payload: getPeople( )
    }
}
