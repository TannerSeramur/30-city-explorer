import React, { Component } from 'react';
import superagent from 'superagent';
import Deck from './Deck';

export class Location extends Component {
  state = {
    userLocation: '',
    location: '',
    latitude: '',
    longitude: '',
    weather: [],
    yelp: [],
    meetup: [],
    movies: [],
    trails: [],
    isLoading: true
  }

  // ⭐️ React Functions ⭐️ 
  // ✅   goes off when page loads
  async componentDidMount() {
    this.getLocationDetails();
  };


  // ⭐️ Custom Functions ⭐️
  // ✅  gets location details and sets state
  getLocationDetails = async () => {
    const { location } = this.props.match.params;

    console.log('getting location ', location)
    let data = await superagent.get(`https://city-explorer-backend.herokuapp.com/location`, { data: this.state.userLocation || location });
    const { formatted_query, latitude, longitude } = data.body;
    this.setState({
      isLoading: false,
      location: formatted_query,
      latitude,
      longitude,
      userLocation: ''
    });
    this.getResource('weather', data.body);
    this.getResource('movies', data.body);
    this.getResource('yelp', data.body);
    this.getResource('meetups', data.body);
    this.getResource('trails', data.body);
  }

  getResource = async (resource, location) => {
    let data = await superagent.get(`https://city-explorer-backend.herokuapp.com/${resource}`, { data: location })
    this.setState({ [resource]: data.body })
  }
  // ✅  handles new search input, updates state
  // ✅  changes state of location
  handleChange = e => {
    this.setState({ userLocation: e.target.value })
  }
  // ✅   updates URL
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/${this.state.userLocation}`);
    this.getLocationDetails();

  }

  // ⭐️  Render functions below ⭐️
  // ✅  runs loading bar until gets state
  renderLocationDetails = () => {
    if (this.state.isLoading) return <h2>Loading...</h2>

    return (
      <div>
        <h2>Here are the results for {this.state.location}</h2>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude}%2c%20${this.state.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`} />
        <Deck details={this.state.weather} type={'weather'} />
        {/* <Deck details={this.state.movies} />
        <Deck details={this.state.yelp} />
        <Deck details={this.state.meetups} />
        <Deck details={this.state.trails} /> */}
      </div>
    )
  }
  // ⭐️  END ⭐️

  render() {
    return (
      <div>
        <div className="search">
          <h1>City Exporer</h1>
          <h4>Enter a Location</h4>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} placeholder="enter a location" value={this.state.userLocation} />
            <button>Explore!</button>
          </form>
        </div>
        {this.renderLocationDetails()}
      </div>
    );
  }
}

export default Location;
