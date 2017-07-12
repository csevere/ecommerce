import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Register from './containers/Register';
import WeatherData from './containers/WeatherData'; 


//return the Router to set up the routes


class App2 extends Component {
  render() {
    return (
    	<Router>
            <div className = "App">
                <Link to = "/">Weather | </Link> 
                <Link to = "/home">Home</Link> 
                <Route path = "/" component = {WeatherData}/>
                <Route path = "/home" component = {Home}/>
            </div>
	
    	</Router>

    );
  }
}

export default App2;

// <div className = "App">
//                     <WeatherData />
//                 </div> 
