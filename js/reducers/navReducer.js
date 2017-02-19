//@flow
'use strict';
import { PUSH_ROUTE, POP_ROUTE, GO_HOME } from '../constants/constants';
import { NavigationExperimental } from 'react-native';
import type { NavigationRoute, NavigationState }
from '../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';
import type { Action }
from '../actions/types';
import Immutable from 'immutable';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;

export const initialState = {
    index: 0,
    key: 'home',
    routes: [
        {
            key: 'home',
            title: 'Home'
        }
    ]
};

type State = {
    index: number,
    key: string,
    routes: NavigationRoute[]
};

export default function rootNavReducer( state : State = initialState, action : Action ) : State {
    if( action.isRoot === undefined )
        return state;
    return navReducer( state, action );
}

export function navReducer( state : State = initialState, action : Action ) : State {
    var index: number,
    routes: NavigationRoute[];
    switch ( action.type ) {
        case PUSH_ROUTE:
            if (state.routes[state.index] === ( action.route && action.route.key ))
                return state;

            ({ index, routes } = NavigationStateUtils.push( state, action.route ));
            return { key: routes[index].key, index: index, routes: routes };
        case POP_ROUTE:
            if ( state.index === 0 || state.routes.length === 1 )
                return state;

            ({ index, routes } = NavigationStateUtils.pop( state ));
            return { key: routes[index].key, index: index, routes: routes };
        case GO_HOME:
            ({ index, routes } = NavigationStateUtils.pop(NavigationStateUtils.pop( state )));
            return { key: routes[index].key, index: index, routes: routes };
        default:
            return state;
    }
}
