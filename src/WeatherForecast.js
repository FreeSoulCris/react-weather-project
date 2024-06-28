import React, { useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props){
    let [loaded,setLoaded] = useState(false);
    let [forecast,setForecast] = useState(null);

    
    

    useEffect(() =>{
        // set loaded false to run again the api call for the forecast component
        setLoaded(false);
    },[props.coordinates]);
   // if the coordinates change

    function handleResponse (response){
        console.log(response.data);
        setForecast (response.data.daily);
        setLoaded(true)
    }
    
    if (loaded) {
        return  (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast,index) {
                        if (index < 5 ){
                        return (
                            <div className="col" key={index}>
                                <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        );
                    }else{
                        return null;
                    }
                    })}      
    
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

    