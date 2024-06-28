import React, { useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props){
    let [loaded,setLoaded] = useState(false);
    let [forecast,setForecast] = useState(null);

    function handleResponse (response){
        console.log(response.data);
        setForecast (response.data.daily);
        setLoaded(true)
    }
    
    if (loaded) {

        return  (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]}/>
                    </div>
    
                </div>
            </div>);
            
    }else
    {
        //Forecast
        const apiKey ="0239330ab540e803o5b4f9t7e63fbef4";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        return null;
            
    }
    }

    