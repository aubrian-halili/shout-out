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

export const setLoginError = (error) => {
  return {
    type: 'SET_LOGIN_ERROR',
    error,
  };
};

export const validate = () => {
  return (dispatch, getState) => {
    const error = [];
    const { login: { credentials } } = getState();
    if (_.isEmpty(credentials.username)) {
      error.push({
        field: 'username',
        message: 'Invalid value for username',
      });
    }
    if (_.isEmpty(credentials.password) && credentials.password !== null) {
      error.push({
        field: 'password',
        message: 'Invalid value for password',
      });
    }
    dispatch(setLoginError(error));
  };
};

export const login = () => {
  return (dispatch, getState) => {
    const { login: { credentials } } = getState();
    axios.post('/auth/login', {
      username: credentials.username,
      password: credentials.password,
    })
    .then((response) => {
      dispatch(setUser(response.data));
      browserHistory.push('/dashboard');
    })
    .catch(() => {
      dispatch(setLoginError([{
        field: 'generic',
        message: 'Invalid username or password',
      }]));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    axios.get('/auth/logout')
    .then(() => {
      dispatch(setUser({}));
      browserHistory.push('/');
    })
    .catch(() => {
      dispatch(setLoginError([{
        field: 'generic',
        message: 'Unable to logout',
      }]));
    });
  };
};
