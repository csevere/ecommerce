import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//go get the createStore method from redux module 
//containers, components that know about the state 
import {createStore} from 'redux';

//import the provider from react-redux so react and redux can talk
import {Provider} from 'react-redux';

//import the rootREducer so we can give it to the store .. fill those shelves
import reducers from './reducers/rootReducer'

const theStore = createStore(reducers);

//reactDom.render takes 2 args...1. what, 2. Where

ReactDOM.render(
	<Provider store = {theStore}>
		<App />    
	</Provider>,	
	document.getElementById('root')
);

