import React, {Component} from 'react';
import $ from 'jquery'; 
import {bindActionCreators} from 'redux';
import fetchWeather from '../actions/fetchWeather';
import {connect} from 'react-redux'; 

//this.state values become objects when changing this 

class WeatherData extends Component{
	constructor(props) {
		super(props);
		// this.state = {
		// 	weatherData: {}
		// }
	};


	componentDidMount() {
		this.props.fetchWeather(); 
		
	};
	

	render(){
		if (this.props.weatherData.main == undefined){
			return (<h1>Loading...</h1>)
		}else{
			return(
				<div>
					<h1> Atlanta Weather</h1>
					&deg;{this.state.weatherData.main.temp}
				</div>
			)
		}
	};


	// function mapStateToProps(state){
	// 	return{
	// 		weatherData: state.weather
	// 	}
		
	// };


	function mapDispatchToProps(dispatch){
		return bindActionCreators({
			fetchWeather: fetchWeather
		}, dispatch); 
	};


};

var WeatherDataS = connect(mapStateToProps, mapDispatchToProps)(Weather Data)

export default WeatherDataS; 