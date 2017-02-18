//@flow
'use strict';
import { PUSH_ROUTE, POP_ROUTE, GO_HOME } from '../constants/constants';
import type { NavigationRoute }
from '../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';

export function push( route : NavigationRoute, index : ?number ) {
    if ( index !== undefined ) {
        return { type: PUSH_ROUTE, tabIndex: index, route };
    } else {
        return { type: PUSH_ROUTE, route };
    }
}

export function rootPush( route : NavigationRoute ) {
    return { type: PUSH_ROUTE, route, isRoot: true };
}

export function pop( index : ?number ) {
    if ( index !== undefined )
        return { type: POP_ROUTE, tabIndex: index };
    else {
        return { type: POP_ROUTE };
    }
}

export function rootPop( ) {
    return { type: POP_ROUTE, isRoot: true }
}

export function goHome( index : number ) {
    if ( index )
        return { type: GO_HOME, tabIndex: index };
    else {
        return { type: GO_HOME };
    }
}
