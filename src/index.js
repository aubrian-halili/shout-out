import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';

import shoutApp from './reducers';
import Root from './components/Root';

const store = createStore(shoutApp);

render(
  <Provider store={store}>
    <Root history={browserHistory} />
  </Provider>,
  document.getElementById('app'),
);
