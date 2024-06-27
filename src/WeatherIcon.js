import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){

    const codeMaping = {
        
        "clear-sky-day" : "CLEAR_DAY",
        "few-clouds-day" : "PARTLY_CLOUDY_DAY",
        "scattered-clouds-day" : "CLOUDY",
        "rain-day" : "RAIN",
        "broken-clouds-day" : "PARTLY_CLOUDY_DAY",
        "shower-rain-day" : "RAIN",
        "thunderstorm-day" : "RAIN",
        "snow-day" : "SNOW",
        "mist-day" : "FOG",
        "mist-night" : "FOG",
        "snow-night" : "SNOW",
        "thunderstorm-night" : "RAIN",
        "rain-night" : "RAIN",
        "shower-rain-night" : "RAIN",
        "broken-clouds-night" : "PARTLY_CLOUDY_NIGHT",
        "few-clouds-night" : "PARTLY_CLOUDY_NIGHT",
        "scattered-clouds-night" : "CLOUDY",
        "clear-sky-night" : "CLEAR_NIGHT"
    }
    return(
            <ReactAnimatedWeather
                        icon={codeMaping[props.code]}
                        color="#1d6ef8"
                        size= {52}
                        animated= {true}
                    />
    );

}