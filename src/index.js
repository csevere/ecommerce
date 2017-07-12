import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App2 from './App2';
// import WeatherData from './containers/WeatherData'; 


//go get the createStore method from redux module 
//containers, components that know about the state 
//we also need middleware 
import {createStore, applyMiddleWare} from 'redux';
import reduxPromise from 'redux-promise'; 

//import the provider from react-redux so react and redux can talk
import {Provider} from 'react-redux';

//import the rootREducer so we can give it to the store .. fill those shelves
import rootReducer from './reducers/rootReducer'

const theStore = createStore(rootReducer);
console.log(theStore)
// create store with middleware
//applymiddleware takes an arg (all the middleware to be used)
//which returns a function 
const middlewareforstore = applyMiddleWare(reduxPromise)(createStore)
const storePrep = applyMiddleWare(createStore);
// const storePrep = storePrep(rootReducer);

//reactDom.render takes 2 args...1. what, 2. Where
//remember can only take one div 

ReactDOM.render(
	<Provider store = {theStore}>
		<div className = "container">
			<App /> 
		</div>  
	</Provider>,	
	document.getElementById('root')
);


// <App /> 
// <WeatherData />
