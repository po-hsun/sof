//@flow
'use strict';
import { PRESS_FEED, PRESS_HEATMAP, PRESS_CURRICULUM, PRESS_ACTIVITY, PRESS_PROFILE } from '../constants/constants';
import type { Action, RootAction }
from '../actions/types';
import { navReducer, initialState as initialNavState } from './navReducer';
import Immutable from 'immutable';

const PRESS = [ PRESS_FEED, PRESS_CURRICULUM, PRESS_ACTIVITY, PRESS_HEATMAP, PRESS_PROFILE ];

type TabState = {
    title: string,
    tabIndex: number,
    navState: Object
}

type GetCurrentTab = ( ) => TabState;

type State = {
    indexOfTabs: number,
    tabs: Object[],
    getCurrentTab: GetCurrentTab
};

const InitialTabState = Immutable.Record({ title: 'Feed', tabIndex: 0, navState: initialNavState });

const initialTabState = new InitialTabState( );

const initialTabsState = Immutable.List([
    initialTabState,
    new InitialTabState({ title: 'Curriculum', tabIndex: 1 }),
    new InitialTabState({ title: 'Activity', tabIndex: 2 }),
    new InitialTabState({ title: 'Heat Map', tabIndex: 3 }),
    new InitialTabState({ title: 'Profile', tabIndex: 4 })
]);

const InitialState = Immutable.Record({ indexOfTabs: 0, tabs: initialTabsState });

const initialState = new InitialState( );

export default function combineReducer( state : State = initialState, action : Action ) : State {
    return tabReducer( state, action ).setIn(['tabs'], tabsNavReducer( state.getIn([ 'tabs' ]), action ));
}

function tabReducer( state : State, action : Action ) : State {
    switch( action.type ) {
        case PRESS_FEED:
            return state.setIn( ['indexOfTabs'], 0 );
        case PRESS_CURRICULUM:
            return state.setIn( ['indexOfTabs'], 1 );
        case PRESS_ACTIVITY:
            return state.setIn( ['indexOfTabs'], 2 );
        case PRESS_HEATMAP:
            return state.setIn( ['indexOfTabs'], 3 );
        case PRESS_PROFILE:
            return state.setIn( ['indexOfTabs'], 4 );
        default:
            return state;
    }
}

function tabsNavReducer( state, action ) {
    return state.map(t => tabNavReducer( t, action ));
}

function tabNavReducer( state : TabState, action : Action ) : TabState {
    return state.setIn(['navState'], navReducer( state.getIn([ 'navState' ]), action ));
}
