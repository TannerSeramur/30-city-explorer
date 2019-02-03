import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import superagent from 'superagent';
import Home from './Home';
import Location from './Location';


class App extends Component {

  // async componentDidMount() {
  //   let data = await superagent.get('/location');
  //   console.log(data, 'data yay!');
  // }


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/:location" component={Location} />
        </div>
      </Router>
    );
  }
}

export default App;
