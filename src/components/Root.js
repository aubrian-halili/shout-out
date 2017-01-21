import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import App from './App';

class Root extends Component {
  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

export default Root;
