import $ from 'jquery';

//fetchweather is an async operation; the dispatcher will not wait
//redux middleware is helpful; also known as redux-promise, has to be
//added when the store is created 

var fetchWeather = function(){
	console.log("Fetch weather action in progress...")
	const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=30324,us&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d';
	const thePromise = $.getJSON(weatherUrl);
	//jquery AJAX always returns a promise. We no longer want to send our callback
	//redux-promise will handle it for us
	// $.getJSON(weatherUrl, (weatherData)=>{
		console.log(weatherData)
		return{
			type: 'GET_WEATHER',
			payload: thePromise 
		}
	// })
};

export default fetchWeather;
