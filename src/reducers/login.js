import { combineReducers } from 'redux';

const username = (state = '', action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
};

const password = (state = '', action) => {
  switch (action.type) {
    case 'SET_PASSWORD':
      return action.password;
    default:
      return state;
  }
};

const error = (state = [], action) => {
  switch (action.type) {
    case 'SET_LOGIN_ERROR':
      return action.error;
    default:
      return state;
  }
};

const credentials = combineReducers({
  username,
  password,
});

const login = combineReducers({
  credentials,
  error,
});

export default login;
