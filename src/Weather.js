import React, { useState } from "react"; 
import axios from "axios" ;
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";




export default function Weather(props) {
    const [weatherData, setWeatherData] = useState ({ready : false});
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready:true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            date: new Date (response.data.time * 1000),
            city: response.data.city,
            description :response.data.condition.description,
            iconUrl: response.data.condition.icon_url         
        })

    }

    if (weatherData.ready){
        return (
        <div className="Weather">
            < form>
                <div className="row"> 
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city .." className="form-control" autoFocus="On"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
        </div>
       );

    } else {
    const apiKey ="0239330ab540e803o5b4f9t7e63fbef4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading..."
}
}