//@flow
'use strict';
import { PUSH_ROUTE, POP_ROUTE } from '../constants/constants';
import { NavigationExperimental } from 'react-native';
import type { NavigationRoute }
from '../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';
import type { Action }
from '../actions/types';
const { StateUtils: NavigationStateUtils } = NavigationExperimental;

const initialState = {
    navState: {
        index: 0,
        key: 'root',
        routes: [
            {
                key: 'home',
                title: 'Home'
            }
        ]
    }
};

type navState = {
    index: number,
    key: string,
    routes: NavigationRoute[]
};

type State = {
    navState: navState
};

export default function navigationState( state : State = initialState, action : Action ) : State {
    var navState = {
        ...state.navState
    };
    switch ( action.type ) {
        case PUSH_ROUTE:
            if (state.navState.routes[state.navState.index].key === ( action.route && action.route.key ))
                return state;
            return NavigationStateUtils.push( navState, action.route );
        case POP_ROUTE:
            if ( state.navState.index === 0 || state.navState.routes.length === 1 )
                return state;
            return NavigationStateUtils.pop( navState );
        default:
            return state;
    }
}
