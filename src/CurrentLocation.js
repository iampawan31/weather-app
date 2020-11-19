import React, { Component } from 'react';
import apiKeys from './apiKeys';

export class CurrentLocation extends Component {
  state = {
    lat: undefined,
    lon: undefined,
    temperatureC: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
  };

  componentDidMount() {
    if (navigator.geolocation) {
      this.getPosition()
        .then((position) => {
          this.getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          this.getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This App' to access your location. Your current location will be used for calculating Real time weather."
          );
        });
    } else {
      alert('GeoLocation is not available');
    }
  }

  getPosition = (options) => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  getWeather = async (lat, lon) => {
    const apiCall = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await apiCall.json();

    this.setState({
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      main: data.weather[0].main,
      country: data.sys.country,
      humidity: data.main.humidity,
    });
  };

  dateBuilder = (d) => {
    return d.toString();
  };

  render() {
    if (this.state.temperatureC) {
      return (
        <React.Fragment>
          <div>
            <div className="location-box">
              <div className="location">
                {this.state.city}, {this.state.country}
              </div>
              <div className="date">{this.dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">{this.state.temperatureC}&deg;C</div>
              <div className="weather">{this.state.main}</div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="location-box">
            <div className="location">
              <h3
                style={{ color: 'white', fontSize: '22px', fontWeight: '600' }}
              >
                Detecting your location
              </h3>
              <h3 style={{ color: 'white', marginTop: '10px' }}>
                Your current location wil be displayed on the App <br></br> &
                used for calculating Real time weather.
              </h3>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default CurrentLocation;
