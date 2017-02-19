//@flow
'use strict';
import Immutable from 'immutable';


const initialState = Immutable.fromJS({
  a:'test'
});

export default function testReducer(state = initialState,action){
  return state;
}
