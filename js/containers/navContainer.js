//@flow
'use strict';
import { connect } from 'react-redux';
import Navigator from '../components/navigatorView/navigatorView';
import { push, pop } from '../actions/navActions';

function mapStateToProps( state ) {
    return {
        navState: state.tabState.tabs[state.tabState.indexOfTabs].navState,
        index: state.tabState.indexOfTabs
    };
};

function mapDispatchToProps( dispatch ) {
    return {
        pushRoute: ( route, index ) => dispatch(push( route, index )),
        popRoute: ( index ) => dispatch(pop( index ))
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( Navigator );
