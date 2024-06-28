
import React from 'react';
import Weather from './Weather';
import './App.css';


 export default function App (){
  return ( 
  <div className="App"> 
    <div className="container">
      <h1>Weather App</h1> 
      <Weather defaultCity="Barcelona"/>
       <footer>
          This project was coded by {" "}<a href="https://www.instagram.com/freesoulcriss/" target="_blank" rel=" noopener noreferrer">Cristina Jimenez</a>, is open-sourced on {" "}
          <a href="https://github.com/FreeSoulCris/react-weather-project" target="_blank" rel="noopener noreferrer">Github </a> and hosted on {" "}<a href="https://weather-application-project-react.netlify.app/" target="_blank" rel="noopener noreferrer">Netlify</a>
       </footer>
    </div>
  </div>
  );
  }
