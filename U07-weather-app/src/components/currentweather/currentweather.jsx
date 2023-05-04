import "./currentweather.css"

const CurrentWeather = (data) => {
    return(
    <div className="weather">
      <div className="top">
        <div>
            <p className="city">Stockholm</p>
            <p className="weather-description">Sunny</p>
        </div>
        <div className="bottom">
            <p className="temperature">{}</p>
                <div className="parameter-row">
                    <span className="parameter-label">wind</span>
                    <span className="parameter-value">2 m/s</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">15%</span>
                </div>
      </div>
      <img src="bilder/01d.png" alt="Sunny weather in Stockholm" className="weather-icon" />
    </div>
    );
  };
  
export default CurrentWeather;