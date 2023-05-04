import { useState } from "react";
import "./App.css";
import CelsiusToFahrenheit from "./CelsiusToFahrenheit";
//import CurrentWeather from "./components/currentweather/currentweather";

function celsius() {
  
  const [weatherData, setWeatherData] = useState(null);

  const weatherUrl = (city) => `https://api.weatherapi.com/v1/forecast.json?key=a663d8add08c48ab98e184915230205&q=${city}&days=7&aqi=no&alerts=no`;
  
  
    const handleCelsiusClick = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const curPosition = lat + "," + lng;
  
          const resp = await fetch(weatherUrl(curPosition));
          const data = await resp.json();
          setWeatherData(data);
        });
      }
    };

}




function App() {
  const [weatherData, setWeatherData] = useState(null);


  const weatherUrl = (city) => `https://api.weatherapi.com/v1/forecast.json?key=a663d8add08c48ab98e184915230205&q=${city}&days=7&aqi=no&alerts=no`;
  
  
    const handleLocationClick = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const curPosition = lat + "," + lng;
  
          const resp = await fetch(weatherUrl(curPosition));
          const data = await resp.json();
          setWeatherData(data);
        });
      }
    };
 
    const getCurrentlocation = () => {
      if (!weatherData) {
        return null;
      }
      return weatherData.location.name;
    };
  
    const getCurrentTemp = () => {
      if (!weatherData) {
        return null;
      }
      return weatherData.current.temp_c;
    };
  
    const getCurrentCondition = () => {
      if (!weatherData) {
        return null;
      }
      return weatherData.current.condition.text;
    };
  
    const getCurrenthumidity = () => {
      if (!weatherData) {
        return null;
      }
      return weatherData.current.humidity;
    };
    
    const getCurrentwind = () => {
      if (!weatherData) {
        return null;
      }
      return weatherData.current.wind_mph;
    };
  
    return (
      <div>
        <button className="getweather" onClick={handleLocationClick}>Get weather</button>
        <button className="CelsiusToFahrenheit" onClick={handleLocationClick}>C/F</button>
        <div>
          <p className="location">Current location: {getCurrentlocation()}</p>
          <p className="temperature">Current temperature: {getCurrentTemp()} C°</p>
          <p className="condition">Current condition: {getCurrentCondition()}</p>
          <p className="humidity">Current humidity: {getCurrenthumidity()}</p>
          <p className="wind">Current wind: {getCurrentwind()} mph</p>
        </div>
      </div>
    );
  }
  
  export default App;
  
