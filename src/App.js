import React, { useState } from 'react';
import './App.css';

const api = {
  key: 'd9c398bcfd45349083bde3f5f7e17fae',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const dateBuilder = (d) => {
    return d.toString();
  };

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(
        (res) =>
          res.json().then((result) => {
            setWeather(result);
            setQuery('');
            console.log(weather);
          })
      );
    }
  };

  return (
    <div
      className={
        typeof weather.main !== 'undefined'
          ? weather.main.temp > 16
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="search-bar"
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}&deg;C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default App;
