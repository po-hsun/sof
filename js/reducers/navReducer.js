//@flow
'use strict';
import { PUSH_ROUTE, POP_ROUTE } from '../constants/constants';
import { NavigationExperimental } from 'react-native';
import type { NavigationRoute }
from '../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            key: 'home',
            title: 'Home'
        }
    ]
};

type Action = {
    type: string,
    route: NavigationRoute
};

type State = {
    index: number,
    key: string,
    routes: NavigationRoute[]
};

export default function navigationState( state : State = initialState, action : Action ) {
    switch ( action.type ) {
        case PUSH_ROUTE:
            if (state.routes[state.index].key === ( action.route && action.route.key ))
                return state;
            return NavigationStateUtils.push( state, action.route );
        case POP_ROUTE:
            if ( state.index === 0 || state.routes.length === 1 )
                return state;
            return NavigationStateUtils.pop( state );
        default:
          return state;
    }
}
