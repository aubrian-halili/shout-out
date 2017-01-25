import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Welcome from './Welcome';
import Login from '../containers/LoginContainer';
import Dashboard from '../containers/DashboardContainer';

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="login" component={Login} />
          <Route path="dashboard" component={Dashboard} />
        </Route>
      </Router>
    );
  }
}

export default Root;
