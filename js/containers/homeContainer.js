//@flow
'use strict';
import { connect } from 'react-redux';
import HomeView from '../components/homeView/home';
import fetchData from '../actions/apiActions';

function mapStateToProps( state ) {
    return {
        apiData: state.get( 'apiState' )
    };
};

function mapDispatchToProps( dispatch ) {
    return {
        fetchData: ( ) => dispatch(fetchData( ))
    }
};
export default connect( mapStateToProps, mapDispatchToProps )( HomeView );
