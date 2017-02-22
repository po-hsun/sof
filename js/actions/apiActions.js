//@flow
'use strict';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/constants';
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

export default function fetchData( ) {
    return ( dispatch : Function ) => {
        dispatch(getData( ));
        getPeople( ).then(( data ) => {
            dispatch(getDataSuccess( data ))
        }).catch(( err ) => {
            console.log( 'err:', err );
            dispatch(getDataFailure( ))
        })
    }
}
