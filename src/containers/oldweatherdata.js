import React, {Component} from 'react';
import $ from 'jquery'; 
// import {bindActionCreators} from 'redux';
// import fetchWeather from '../actions/fetchWeather'

//this.state values become objects when changing this 

class WeatherData extends Component{
	constructor(props) {
		super(props);
		this.state = {
			weatherData: []
		}

	}


	componentDidMount() {
		const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=30324,us&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'

		$.getJSON(weatherUrl, (weatherData)=>{
		console.log(weatherData)
			this.setState({
				weatherData: weatherData
			})
		})
		
	}


	render(){
		if (this.state.weatherData.main == undefined){
			return (<h1>Loading...</h1>)
		}else{
			return(
				<div>
					<h1> Atlanta Weather</h1>
					&deg;{this.state.weatherData.main.temp}
				</div>
			)
		}
	}

}

export default WeatherData; 