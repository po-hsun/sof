//@flow
'use strict';
import { connect } from 'react-redux';
import RootNavigator from '../components/navigatorView/rootNavigatorView';
import { rootPush, rootPop } from '../actions/navActions';

function mapStateToProps( state ) {
    return { navState: state.rootNavState };
};

function mapDispatchToProps( dispatch ) {
    return {
        pushRoute: ( route ) => dispatch(rootPush( route )),
        popRoute: ( ) => dispatch(rootPop( ))
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( RootNavigator );
