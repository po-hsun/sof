//@flow
'use strict';
import { connect } from 'react-redux';
import Navigator from '../components/navigatorView/navigatorView';
import { push, pop, goHome } from '../actions/navActions';
import fetchData from '../actions/apiActions';

function mapStateToProps( state ) {
    const indexOfTabs = state.getIn([ 'tabState', 'indexOfTabs' ]);
    return {
        navState: state.getIn([ 'tabState', 'tabs', indexOfTabs, 'navState' ]),
        index: indexOfTabs,
        title: state.getIn([ 'tabState', 'tabs', indexOfTabs, 'title' ]),
    };
};

function mapDispatchToProps( dispatch ) {
    return {
        pushRoute: ( route, index ) => dispatch(push( route, index )),
        popRoute: ( index ) => dispatch(pop( index )),
        goHome: ( index ) => dispatch(goHome( index )),
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( Navigator );
