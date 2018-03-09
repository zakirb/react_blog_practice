import React, { Component } from 'react';
const axios = require('axios');

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      zipcode:'',
      weather:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // componentDidMount() {
  //
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    let zip = this.state.zipcode;
    let url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial";
    axios({
      method: 'GET',
      url
    })
    .then((response) => {
      console.log(response.data)
      this.setState({
        weather:response.data
      })
    })
    .catch((error) => {
      console.log('An error occured while parsing!', error)
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      zipcode: e.target.value
    })
  }

  render () {

    const {weather} = this.state
    if (weather) {
      return (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].main}</p>
          <div>{Math.round(weather.main.temp)} &deg; F</div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Weather stuff</h1>
          <p>where some weather info might go</p>
          <input type='text' value={this.state.zipcode} onChange={(e) => this.handleChange(e)} />
          <button type='submit' onClick={(e) => this.handleSubmit(e)}>Look up Weather</button>
        </div>
      )
    }
  }
}

export default About;
