import React, { Component } from 'react';
import '../styles/reset.scss';
import '../styles/home.scss';


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
      <div className="home">
        <h1>Welcome to City Exporer</h1>
        <div className='line' />
        <form onSubmit={this.handleSubmit}>
          <input className="textBox" type="text" onChange={this.handleChange} placeholder="enter a location" />
          <button>Explore!</button>
        </form>
      </div>
    );
  }
}

export default Home;