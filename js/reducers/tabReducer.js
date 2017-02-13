//@flow
'use strict';
import { PRESS_FEED, PRESS_HEATMAP, PRESS_CURRICULUM, PRESS_ACTIVITY, PRESS_PROFILE } from '../constants/constants';
import type { Action }
from '../actions/types';

type TabState = {
    indexOfTabs: number,
    tabs: Object[]
};

type State = {
    tabState: TabState
};

const initialState = {
    tabState: {
        indexOfTabs: 0,
        tabs: [
            {
                title: 'Feed'
            }, {
                title: 'Curriculum'
            }, {
                title: 'Activity'
            }, {
                title: 'Heat Map'
            }, {
                title: 'Profile'
            }
        ]
    }
};

export default function tabReducer( state : State = initialState, action : Action ) : State {
    var tabState = {
        ...state.tabState
    };
    switch ( action.type ) {
        case PRESS_FEED:
            {
                tabState = {
                    ...tabState,
                    'indexOfTabs': 0
                };
                return { tabState };
            }
        case PRESS_CURRICULUM:
            {
                tabState = {
                    ...tabState,
                    'indexOfTabs': 1
                };
                return { tabState };
            }
        case PRESS_ACTIVITY:
            tabState = {
                ...tabState,
                'indexOfTabs': 2
            };
            return { tabState };
        case PRESS_HEATMAP:
            tabState = {
                ...tabState,
                'indexOfTabs': 3
            };
            return { tabState };
        case PRESS_PROFILE:
            tabState = {
                ...tabState,
                'indexOfTabs': 4
            };
            return { tabState };
        default:
            return state;
    }
}
