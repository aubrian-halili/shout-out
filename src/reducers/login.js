import { combineReducers } from 'redux';

const username = (state = '', action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
};

const isFormatValid = (state = false, action) => {
  switch (action.type) {
    case 'SET_CREDENTIAL_FORMAT_VALID':
      return action.isValid;
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

const usernameError = (state = '', action) => {
  switch (action.type) {
    case 'SET_USERNAME_ERROR':
      return action.error;
    default:
      return state;
  }
};

const passwordError = (state = '', action) => {
  switch (action.type) {
    case 'SET_PASSWORD_ERROR':
      return action.error;
    default:
      return state;
  }
};

const authError = (state = '', action) => {
  switch (action.type) {
    case 'SET_AUTH_ERROR':
      return action.error;
    default:
      return state;
  }
};

const error = combineReducers({
  username: usernameError,
  password: passwordError,
  auth: authError,
});

const credentials = combineReducers({
  username,
  password,
});

const login = combineReducers({
  credentials,
  isFormatValid,
  error,
});

export default login;
