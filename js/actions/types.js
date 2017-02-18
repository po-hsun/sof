//@flow
'use strict';
import type { NavigationRoute }
from '../../node_modules/react-native/Libraries/NavigationExperimental/NavigationTypeDefinition';

// export type Action = {
//     indexOfTabs: number,
//     type: string
// } | {
//     route: NavigationRoute,
//     type: string
//
// };

export type Action = {
    type: 'PRESS_FEED' | 'PRESS_HEATMAP' | 'PRESS_CURRICULUM' | 'PRESS_ACTIVITY' | 'PRESS_PROFILE',
    indexOfTabs: number
} | {
    type: 'PUSH_ROUTE' | 'POP_ROUTE',
    tabIndex: number,
    route: NavigationRoute
};

export type RootAction = {
    type: string,
    isRoot: boolean
};
