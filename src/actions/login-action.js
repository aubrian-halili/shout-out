import axios from 'axios';
import { browserHistory } from 'react-router';
import _ from '../util/_'

export const setUsername = (username) => {
  return {
    type: 'SET_USERNAME',
    username,
  };
};

export const setPassword = (password) => {
  return {
    type: 'SET_PASSWORD',
    password,
  };
};

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user,
  };
};

export const setUsernameError = (error) => {
  return {
    type: 'SET_USERNAME_ERROR',
    error,
  };
};

export const setPasswordError = (error) => {
  return {
    type: 'SET_PASSWORD_ERROR',
    error,
  };
};

export const setAuthError = (error) => {
  return {
    type: 'SET_AUTH_ERROR',
    error,
  };
};

export const setFormatValid = (isValid) => {
  return {
    type: 'SET_CREDENTIAL_FORMAT_VALID',
    isValid,
  };
};

export const validateUsername = () => {
  return (dispatch, getState) => {
    const { login: { credentials: { username } } } = getState();
    if (_.isEmpty(username)) {
      dispatch(setUsernameError('Invalid value for username'));
    } else {
      dispatch(setUsernameError(''));
    }
  };
};

export const validatePassword = () => {
  return (dispatch, getState) => {
    const { login: { credentials: { password } } } = getState();
    if (_.isEmpty(password)) {
      dispatch(setPasswordError('Invalid value for password'));
    } else {
      dispatch(setPasswordError(''));
    }
  };
};

export const isFormatValid = () => {
  return (dispatch, getState) => {
    const { login: { credentials: { username, password } } } = getState();
    if (!_.isEmpty(username) && !_.isEmpty(password)) {
      dispatch(setFormatValid(true));
    } else {
      dispatch(setFormatValid(false));
    }
  };
};

export const login = () => {
  return (dispatch, getState) => {
    const { login: { credentials } } = getState();
    axios.post('/api/auth/login', {
      username: credentials.username,
      password: credentials.password,
    })
    .then((response) => {
      dispatch(setUser(response.data));
      dispatch(setAuthError(''));
      browserHistory.push('/dashboard');
    })
    .catch(() => {
      dispatch(setAuthError('Invalid username or password'));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    axios.get('/api/auth/logout');
    dispatch(setUser({}));
    browserHistory.push('/');
  };
};
