//this is our master reducer...the root reducer
//the reducer hold pieces of state. the root reducer holds all the reducers
//i.e. the rootreducer holds all pieces of state, or application state
// we need to get the combineReducers method from reduc, to make a rootReducer that the
//provider can use

import {combineReducers} from 'redux'; 

import HomeReducer from './HomeReducer';

//create a rootReducer using hte combineReducer method, so we can export it to
//the Store in index.js
const rootReducer = combineReducers({

	//inside here, we pass each reducer as a key/value
	//each key will be available as a piece of state laster
	


})

export default rootReducer 