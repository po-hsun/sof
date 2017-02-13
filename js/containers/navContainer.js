//@flow
'use strict';
import { connect } from 'react-redux';
import Navigator from '../components/navigatorView';
import { push, pop } from '../actions/navActions';

function mapStateToProps( state ) {
    return { navigationState: state.navReducer };
};

function mapDispatchToProps( dispatch ) {
    return {
        pushRoute: ( route ) => dispatch(push( route )),
        popRoute: ( ) => dispatch(pop( ))
    }
};
export default connect( mapStateToProps )( Navigator );
