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
            {
                return {
                    ...state,
                    indexOfTabs: action.indexOfTabs
                };
            }
        case PRESS_CURRICULUM:
            {
                return {
                    ...state,
                    indexOfTabs: action.indexOfTabs
                };
            }
        case PRESS_ACTIVITY:
            return {
                ...state,
                indexOfTabs: action.indexOfTabs
            };
        case PRESS_HEATMAP:
            return {
                ...state,
                indexOfTabs: action.indexOfTabs
            };
        case PRESS_PROFILE:
            return {
                ...state,
                indexOfTabs: action.indexOfTabs
            };
        default:
            return state;
    }
}
