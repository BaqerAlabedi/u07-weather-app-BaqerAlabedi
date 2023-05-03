import { useState } from "react";
import "./App.css";
import CurrentWeather from "./components/currentweather/currentweather";



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

  return (
    <div>
      <button onClick={handleLocationClick}>Get weather</button>
      <div>
        <p>Current temperature: {getCurrentTemp()} C</p>
        <p>Current condition: {getCurrentCondition()}</p>
      </div>
    </div>
  );
}

export default App;

