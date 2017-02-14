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
    title: 'Feed',
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
                'indexOfTabs': 0,
                title: 'Feed'
            };
        case PRESS_CURRICULUM:
            return {
                ...state,
                'indexOfTabs': 1,
                title: 'Curriculum'
            };
        case PRESS_ACTIVITY:
            return {
                ...state,
                'indexOfTabs': 2,
                title: 'Activity'
            };
        case PRESS_HEATMAP:
            return {
                ...state,
                'indexOfTabs': 3,
                title: 'Heat Map'
            };
        case PRESS_PROFILE:
            return {
                ...state,
                'indexOfTabs': 4,
                title: 'Profile'
            };
        default:
            return state;
    }
}
