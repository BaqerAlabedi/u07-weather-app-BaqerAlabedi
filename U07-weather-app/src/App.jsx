import "./App.css";
import React, { useState, useEffect } from 'react';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [iconURL, seticonURL] = useState(String);
  const [hourURL, sethourURL] = useState(String);
  const [nexthour, setnextHour] = useState (String);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentHour = currentDateTime.getHours();

  const weatherUrl = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=a663d8add08c48ab98e184915230205&q=${city}&days=3&aqi=no&alerts=no`;

  const handleLocationClick = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const curPosition = lat + "," + lng;
        const resp = await fetch(weatherUrl(curPosition));
        const data = await resp.json();
        
        setWeatherData(data);
        seticonURL(data.current.condition.icon);
        sethourURL(weatherData.forecast.forecastday[0].hour[12].temp_c);

      });
    }
  };
  const handleTemperatureClick = () => {
    setIsCelsius(!isCelsius);
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
    return isCelsius ? weatherData.current.temp_c : weatherData.current.temp_f; // use state to switch between temperature units
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

  const getCurrentSunrise = () => {
    if (!weatherData) {
      return null;
    }
    return weatherData.forecast.forecastday[0].astro.sunrise;
  };

  const getCurrentSunset = () => {
    if (!weatherData) {
      return null;
    }
    return weatherData.forecast.forecastday[0].astro.sunset;
  };

  const getCurrenthour = () => {
    if (!weatherData) {
      return null;
    }
  
    return  weatherData.forecast.forecastday[0].hour[currentHour].temp_c;
  };

  const getCurrenthourtwo = () => {
    if (!weatherData) {
      return null;
    }
  
    return  weatherData.forecast.forecastday[0].hour[currentHour + 1].temp_c;
  };
  const getCurrenthourtree = () => {
    if (!weatherData) {
      return null;
    }
  
    return  weatherData.forecast.forecastday[0].hour[currentHour + 1 + 1].temp_c;
  };
  const getCurrenthourfour = () => {
    if (!weatherData) {
      return null;
    }
  
    return  weatherData.forecast.forecastday[0].hour[currentHour + 1 + 1 + 1].temp_c;
  };

  const getCurrenthourfive = () => {
    if (!weatherData) {
      return null;
    }
  
    return  weatherData.forecast.forecastday[0].hour[currentHour + 1 + 1 + 1 + 1].temp_c;
  };





  // eslint-disable-next-line react/prop-types
 


    
  return (
    <div>
      <button className="getweather" onClick={handleLocationClick}>
        Get weather
      </button>
      <button className="CelsiusToFahrenheit" onClick={handleTemperatureClick}>
        {isCelsius ? "C/F" : "F/C"} {/* display the correct temperature unit */}
      </button>
      
        <p className="location">Current location: {getCurrentlocation()}</p>
        <p className="temperature">
          Current temperature: {getCurrentTemp()} {isCelsius ? "C°" : "F°"}{" "}
          {/* display the correct temperature unit */}
        </p>
        <div className="everything">
        <div className="all">
        <p className="condition">Current condition: {getCurrentCondition()}</p>
        <img src={iconURL}></img>
        <div className="humidity">
        <p className="humidity">Current humidity: {getCurrenthumidity()}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.5q-3.325 0-5.663-2.3T4 13.6q0-1.575.613-3.012T6.35 8.05L12 2.5l5.65 5.55q1.125 1.1 1.738 2.538T20 13.6q0 3.3-2.337 5.6T12 21.5Zm0-2q2.5 0 4.25-1.713T18 13.6q0-1.175-.45-2.237T16.25 9.5L12 5.3L7.75 9.5q-.85.8-1.3 1.863T6 13.6q0 2.475 1.75 4.188T12 19.5Z"/></svg>
        </div>
        <div className="wind">
        <p className="wind">Current wind: {getCurrentwind()}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor"  d="M6.25 5.5A3.25 3.25 0 1 1 9.5 8.75H3a.75.75 0 0 1 0-1.5h6.5A1.75 1.75 0 1 0 7.75 5.5v.357a.75.75 0 1 1-1.5 0V5.5Zm8 2a4.25 4.25 0 1 1 4.25 4.25H2a.75.75 0 0 1 0-1.5h16.5a2.75 2.75 0 1 0-2.75-2.75V8a.75.75 0 0 1-1.5 0v-.5Zm-11 6.5a.75.75 0 0 1 .75-.75h14.5a4.25 4.25 0 1 1-4.25 4.25V17a.75.75 0 0 1 1.5 0v.5a2.75 2.75 0 1 0 2.75-2.75H4a.75.75 0 0 1-.75-.75Z"/></svg>
        </div>
        <div className="Sunset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/></svg>
        <p className="sunset">sunset: {getCurrentSunset()}</p>
      </div>
      <div className="sunrise">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor"  d="M12 2v8m-7.07.93l1.41 1.41M2 18h2m16 0h2m-2.93-7.07l-1.41 1.41M22 22H2M8 6l4-4l4 4m0 12a4 4 0 0 0-8 0"/></svg>
        <p className="sunrise">sunrise: {getCurrentSunrise()}</p>
        </div>
        </div>
      
        <div className="hour">
          <p> hour1: {getCurrenthour()} </p> 
          <p>hour2: {getCurrenthourtwo()} </p> 
          <p>hour3: {getCurrenthourtree()} </p> 
          <p> hour4: {getCurrenthourfour()} </p> 
          <p> hour5: {getCurrenthourfive()} </p> 
        </div>
        </div>
    </div>
  );
}

export default App;
