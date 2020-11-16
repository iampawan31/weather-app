import './App.css';

const api = {
  key: 'd9c398bcfd45349083bde3f5f7e17fae',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const dateBuilder = (d) => {
  return d.toString();
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            name=""
            placeholder="Search..."
            className="search-bar"
            id=""
          />
        </div>
        <div className="location-box">
          <div className="location">New Delhi, IN</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temperature">15&deg;C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
