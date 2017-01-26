import { combineReducers } from 'redux';

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

const form = combineReducers({
  data,
  error,
  isFormatValid,
});

const reducer = combineReducers({
  form,
});

export default reducer;
