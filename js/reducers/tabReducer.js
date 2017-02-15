//@flow
'use strict';
import { PRESS_FEED, PRESS_HEATMAP, PRESS_CURRICULUM, PRESS_ACTIVITY, PRESS_PROFILE } from '../constants/constants';
import type { Action }
from '../actions/types';
import navReducer, { initialState as initialNavState } from './navReducer';

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

const initialTabState = {
    title: 'Feed',
    navState: initialNavState
};

const initialState = {
    indexOfTabs: 0,
    tabs: [
        {
            title: 'Feed',
            tabIndex: 0,
            navState: initialNavState
        }, {
            title: 'Curriculum',
            tabIndex: 1,
            navState: initialNavState
        }, {
            title: 'Activity',
            tabIndex: 2,
            navState: initialNavState
        }, {
            title: 'Heat Map',
            tabIndex: 3,
            navState: initialNavState
        }, {
            title: 'Profile',
            tabIndex: 4,
            navState: initialNavState
        }
    ],
    getCurrentTab: function ( ) {
        return this.tabs[this.indexOfTabs];
    }
};

export default function combineReducer( state : State = initialState, action : Action ) : State {
    return {
        ...tabReducer( state, action ),
        tabs: tabsNavReducer( state.tabs, action )
    };
}

function tabReducer( state : State, action : Action ) : State {
    switch( action.type ) {
        case PRESS_FEED:
            return {
                ...state,
                'indexOfTabs': 0
            };
        case PRESS_CURRICULUM:
            return {
                ...state,
                'indexOfTabs': 1
            };
        case PRESS_ACTIVITY:
            return {
                ...state,
                'indexOfTabs': 2
            };
        case PRESS_HEATMAP:
            return {
                ...state,
                'indexOfTabs': 3
            };
        case PRESS_PROFILE:
            return {
                ...state,
                'indexOfTabs': 4
            };
        default:
            return state;
    }
}

function tabsNavReducer( state, action ) {
    return state.map(t => tabNavReducer( t, action ));
}

function tabNavReducer( state : TabState, action : Action ) : TabState {
    if( state.tabIndex !== action.tabIndex )
        return state;
    return {
        title: state.title,
        tabIndex: state.tabIndex,
        navState: navReducer( state.navState, action )
    };
}
