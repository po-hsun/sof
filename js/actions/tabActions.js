//@flow
'use strict';
import { PRESS_FEED, PRESS_CURRICULUM, PRESS_ACTIVITY, PRESS_HEATMAP, PRESS_PROFILE } from '../constants/constants';

export default function changeTab( index : number ) {
    var type;
    switch ( index ) {
        case 0:
            type = PRESS_FEED;
            break;
        case 1:
            type = PRESS_CURRICULUM;
            break;
        case 2:
            type = PRESS_ACTIVITY;
            break;
        case 3:
            type = PRESS_HEATMAP;
            break;
        case 4:
            type = PRESS_PROFILE;
            break;
    }
    return { type: type, indexOfTabs: index };
}
