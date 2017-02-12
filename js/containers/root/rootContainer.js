//@flow
'use strict';
import { connect } from 'react-redux';
import Navigation from '../../components/navigationView/navigationView';
import {changeTab} from '../../actions/tabActions';

function mapDispatchToProps(dispatch:Function){
  return {
    changeTab: (index:number)=>dispatch(changeTab(index))
  };
}

module.exports = connect(( state ) => {
    const index = state.indexOfTabs;
    return { index: index, title: state.tabs[index].title }
},mapDispatchToProps)( Navigation );
