import React, { Component } from 'react';
import superagent from 'superagent';
import Deck from './Deck';
import '../styles/location.scss';

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
        <div className="map">
          <h2>{this.state.location}</h2>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude}%2c%20${this.state.longitude}&zoom=12&size=400x300&maptype=roadmap&key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`} alt="" />
        </div>
        <Deck details={this.state.weather} type={'weather'} />
        <Deck details={this.state.yelp} type={'yelp'} />
        <Deck details={this.state.meetup} type={'meetup'} />
        <Deck details={this.state.trails} type={'trails'} />
        <Deck details={this.state.movies} type={'movies'} /> 
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
      <div className="location">
        <h4>City Explorer</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="search">
            <input className='input' type="text" onChange={this.handleChange} placeholder="New location" value={this.state.userLocation} />
            <button>Explore!</button>
          </div>
        </form>
        {this.renderLocationDetails()}
      </div>
    );
  }
}

export default Location;
