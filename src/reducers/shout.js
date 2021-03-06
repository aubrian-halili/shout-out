import { combineReducers } from 'redux';
import Immutable from 'immutable';

import _ from '../util/_';

const data = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'SET_SHOUT': {
      let shout = Immutable.Map(state);
      if (_.has(action.shout, 'id')) {
        shout = shout.set('id', action.shout.id);
      }
      if (_.has(action.shout, 'text')) {
        shout = shout.set('text', action.shout.text);
      }
      return shout.toJSON();
    }
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
