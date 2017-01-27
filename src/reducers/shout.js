import { combineReducers } from 'redux';
import Immutable from 'immutable';

import _ from '../util/_';

const data = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'SET_SHOUT':
      return action.shout;
    default:
      return state;
  }
};

const error = (state = '', action) => {
  switch (action.type) {
    case 'SET_SHOUT_ERROR':
      return action.error;
    default:
      return state;
  }
};

const isFormatValid = (state = false, action) => {
  switch (action.type) {
    case 'SET_SHOUT_FORMAT_VALID':
      return action.isValid;
    default:
      return state;
  }
};

const list = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHOUT_LIST':
      return action.shouts;
    case 'DELETE_SHOUT':
      return Immutable.List(state).delete(_.findIndex(state, { id: action.id })).toJSON();
    default:
      return state;
  }
};

const form = combineReducers({
  data,
  error,
  isFormatValid,
});

const reducer = combineReducers({
  form,
  list,
});

export default reducer;
