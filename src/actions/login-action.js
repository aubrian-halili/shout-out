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
