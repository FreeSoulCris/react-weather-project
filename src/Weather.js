import React, { useState } from "react"; 
import axios from "axios" ;
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";




export default function Weather(props) {
    const [weatherData, setWeatherData] = useState ({ready : false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready:true,
            coordinates: response.data.coordinates,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            date: new Date (response.data.time * 1000),
            city: response.data.city,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
        })

    }
    function search(){
        //city
        const apiKey ="0239330ab540e803o5b4f9t7e63fbef4";
         let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleSubmit (event) {
        event.preventDefault();
        //Search for a city
        search();
    }

    function handleCityChange (event){
        setCity(event.target.value);
    }


    if (weatherData.ready){
        return (
        <div className="Weather">
            < form onSubmit={handleSubmit}>
                <div className="row"> 
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city .." className="form-control" autoFocus="On" onChange={handleCityChange}/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates ={weatherData.coordinates}/>
        </div>
       );

    } else {
    search();  
    return "Loading..."
}
}