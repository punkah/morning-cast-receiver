import React, { Component } from 'react';
import './Weather.scss';

export default class Weather extends Component {
  state = {
    weather: undefined,
  };

  async componentDidMount() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?'
      + 'q=London,uk&'
      + 'units=metric&'
      + 'appid=77b85d272130a406b4ef00e5c84ccd01';
    /*eslint-disable*/
    const response = await fetch(url);
    console.log(response);
    const weather = await response.json();
    console.log(weather);
    this.setState({ weather });
  }

  render() {
    const { weather } = this.state;
    return (
      <div className="weather">
        <div className="weather--title">Temperature: {weather && weather.main.temp}</div>
      </div>
    );
  }
}
