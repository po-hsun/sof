//@flow
'use strict';
import { connect } from 'react-redux';
import Navigation from '../components/navigationView/navigationView';
import { changeTab } from '../actions/tabActions';
import * as PRESS from '../constants/constants';
// import { PRESS_FEED, PRESS_HEATMAP, PRESS_CURRICULUM, PRESS_ACTIVITY, PRESS_PROFILE } from '../constants/constants';

function mapDispatchToProps( dispatch : Function ) {
    return {
        changeTab: ( index : number ) => dispatch(changeTab( index ))
    };
}

function mapStateToProps( state ) {
    const index = state.tabState.indexOfTabs;
    return { index: index, title: state.tabState.title };
}

module.exports = connect( mapStateToProps, mapDispatchToProps )( Navigation );
