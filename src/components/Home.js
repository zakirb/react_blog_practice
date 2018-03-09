import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shakespeare: ''
    }
  }
  componentDidMount() {
    ///save reference to 'this' because the value of this will change
    //inside the different callback functions
    // var base = this

    //the url for our api
    let poemApi = "http://ShakeItSpeare.com/api/poem"
    //our fetch of that poemApi
    // fetch(poemApi)
    // .then((response) => {
    //   return response.json()
    // })
    // .then((json) => {
    //   base.setState({ shakespeare: json.poem})
    //   console.log('FNSJNIDIS');
    // })
    // .catch((error) => {
    //   console.log('An error occured while parsing', error)
    // })

    // axios.get(poemApi)
    // .then((response) => {
    //   console.log(response)
    //   base.setState({ shakespeare: response.data.poem })
    // })
    // .catch((error) => {
    //   console.log('An error occured while parsing!', error)
    // })

    axios({
      method: 'GET',
      url: poemApi
    })
    .then((response) => {
      this.setState({ shakespeare: response.data.poem})
    })
    .catch((error) => {
      console.log('An error occured while parsing!', error)
    })

  }

  render(){

    let poetry = this.state.shakespeare
    if (poetry) {
      return (
        <div>
          <h1>My favorite Shakespeare poem:</h1>
          <p>{poetry}</p>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Home</h1>
          <p>This is a home page</p>
        </div>
      )
    }
  }
}


export default Home;
