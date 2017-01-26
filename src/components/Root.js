import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './App';
import Welcome from './Welcome';
import Login from '../containers/LoginContainer';
import Dashboard from '../containers/DashboardContainer';
import ShoutList from '../containers/ShoutListContainer';
import ShoutFormContainer from '../containers/ShoutFormContainer';

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Welcome} />
          <Route path="login" component={Login} />
          <Route path="dashboard" component={Dashboard}>
            <IndexRoute component={ShoutFormContainer} />
            <Route path="shouts" component={ShoutList} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Root;
