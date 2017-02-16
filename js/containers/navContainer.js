//@flow
'use strict';
import { connect } from 'react-redux';
import Navigator from '../components/navigatorView/navigatorView';
import { push, pop, goHome } from '../actions/navActions';

function mapStateToProps( state ) {
    return {
        navState: state.tabState.getCurrentTab().navState,
        index: state.tabState.indexOfTabs,
        title: state.tabState.getCurrentTab().title
    };
};

function mapDispatchToProps( dispatch ) {
    return {
        pushRoute: ( route, index ) => dispatch(push( route, index )),
        popRoute: ( index ) => dispatch(pop( index )),
        goHome: (index) => dispatch(goHome(index))
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( Navigator );
