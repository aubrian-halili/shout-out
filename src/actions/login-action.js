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
    if (_.isEmpty(credentials.password)) {
      error.push({
        field: 'password',
        message: 'Invalid value for password',
      });
    }
    dispatch(setLoginError(error));
  };
};
