import React, { Component } from 'react';


class Home extends Component {

  state = {
    userLocation: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/${this.state.userLocation}`);
  }
  handleChange = e => {
    this.setState({ userLocation: e.target.value })
  }


  render() {
    return (
      <div>
        <h1>City Exporer</h1>
        <h4>Enter a Location</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="enter a location" />
          <button>Explore!</button>
        </form>
      </div>
    );
  }
}

export default Home;