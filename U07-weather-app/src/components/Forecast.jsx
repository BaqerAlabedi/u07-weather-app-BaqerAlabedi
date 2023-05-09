const Forecast = ({ getCurrenForecastday, getCurrentTemp, getCurrentCondition }) => {
    return (
      <div>
        <h2>{getCurrenForecastday}</h2>
        <p>{getCurrentTemp}°C - {getCurrentCondition}</p>
      </div>
    );
  }

  const getCurrenForecastday = () => {
    if (!weatherData) {
      return null;
    }
    return weatherData.forecast.forecastday[0].day;
  };

  
  <p className="forecast">day1: {getCurrenForecastday()}</p>