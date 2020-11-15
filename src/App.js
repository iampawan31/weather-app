import './App.css';

const api = {
  key: 'd9c398bcfd45349083bde3f5f7e17fae',
  base: 'https://api.openweathermap.org/data/2.5/',
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
          <div className="location"></div>
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
