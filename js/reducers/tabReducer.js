//@flow
'use strict';
import { PRESS_FEED, PRESS_HEATMAP, PRESS_CURRICULUM, PRESS_ACTIVITY, PRESS_PROFILE } from '../constants/constants';
import type { Action }
from '../actions/types';

type State = {
    indexOfTabs: number,
    tabs: Object[]
};

const initialState = {
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
};

export default function tabReducer( state : State = initialState, action : Action ) : State {
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
