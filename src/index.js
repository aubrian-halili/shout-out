import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';

import reducers from './reducers';
import Root from './components/Root';
import css from './styles/app.css';

// Added comments again
const engine = createEngine('YjGQoDeJHdAm');
const storageMiddleware = storage.createMiddleware(engine);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  storage.reducer(reducers),
  composeEnhancers(
    applyMiddleware(thunk, storageMiddleware),
  ),
);

const load = storage.createLoader(engine);
load(store).then(() => {
  render(
    <Provider store={store}>
      <Root history={browserHistory} />
    </Provider>,
    document.getElementById('app'),
  );
});
