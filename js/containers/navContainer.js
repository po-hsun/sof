//@flow
'use strict';
import { connect } from 'react-redux';
import Navigator from '../components/navigatorView/navigatorView';
import { push, pop } from '../actions/navActions';

function mapStateToProps( state ) {
    return { navState: state.navState };
};

function mapDispatchToProps( dispatch ) {
    return {
        pushRoute: ( route ) => dispatch(push( route )),
        popRoute: ( ) => dispatch(pop( ))
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( Navigator );
