import "./currentweather.css"

const CurrentWeather = () => {
    return(
    <div className="weather">
      <div className="top">
        <div>
            <p className="city">Stockholm</p>
            <p className="weather-description">Sunny</p>
        </div>
        <div className="bottom">
            <p className="temperature">18C°</p>
            <div className="detalis">
                <div className="parameter-row">
                    <span className="parameter-label top">Detalis</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Feels like</span>
                    <span className="parameter-value">22°</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">wind</span>
                    <span className="parameter-value">2 m/s</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Humidity</span>
                    <span className="parameter-value">15%</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Pressure</span>
                    <span className="parameter-value">15 hPa </span>
                </div>
            </div>
        </div>
      </div>
      <img src="bilder/01d.png" alt="Sunny weather in Stockholm" className="weather-icon" />
    </div>
    );
  };
  
export default CurrentWeather;