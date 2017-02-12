//@flow
'use strict';
import { PUSH_ROUTE, POP_ROUTE } from '../constants/constants';
import type { NavigationRoute }
from '../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';

export function push( route : NavigationRoute ) {
    return { type: PUSH_ROUTE, route };
}

export function pop( ) {
    return { type: POP_ROUTE }
}
