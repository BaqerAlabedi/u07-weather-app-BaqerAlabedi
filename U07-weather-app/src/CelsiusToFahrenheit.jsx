import React, { useState } from "react";

function CelsiusToFahrenheit() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  function convertCelsiusToFahrenheit() {
    const tempInFahrenheit = (parseFloat(celsius) * 1.8) + 32;
    setFahrenheit(tempInFahrenheit.toFixed(1));
  }

  return (
    <div className="celsius-to-fahrenheit-container">
      <h2 className="celsius-to-fahrenheit-title">Celsius to Fahrenheit Conversion</h2>
      <div className="celsius-to-fahrenheit-input">
        <label className="celsius-to-fahrenheit-label">Celsius:</label>
        <input type="number" value={celsius} onChange={(e) => setCelsius(e.target.value)} />
      </div>
      <button className="celsius-to-fahrenheit-button" onClick={convertCelsiusToFahrenheit}>Convert</button>
      {fahrenheit && <p className="celsius-to-fahrenheit-result">{celsius} degrees Celsius is equal to {fahrenheit} degrees Fahrenheit.</p>}
    </div>
  );
}

export default CelsiusToFahrenheit;




