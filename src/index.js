import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';

import shoutApp from './reducers';
import Root from './components/Root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  shoutApp,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

render(
  <Provider store={store}>
    <Root history={browserHistory} />
  </Provider>,
  document.getElementById('app'),
);
