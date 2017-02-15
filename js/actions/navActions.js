//@flow
'use strict';
import { PUSH_ROUTE, POP_ROUTE } from '../constants/constants';
import type { NavigationRoute }
from '../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';

export function push( route : NavigationRoute, index : number ) {
    return { type: PUSH_ROUTE, tabIndex: index, route };
}

export function pop( index : number ) {
    return { type: POP_ROUTE, tabIndex: index }
}
