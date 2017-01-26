import { connect } from 'react-redux';

import _ from '../util/_';
import Component from '../components/Login';
import { setUsername, setPassword, login, isFormatValid, validateUsername, validatePassword } from '../actions/login-action';

const getUsernameState = (state) => {
  const { login: { error: { username } } } = state;
  const isError = !_.isEmpty(username) || false;
  return {
    isError,
    message: username,
  };
};

const getPasswordState = (state) => {
  const { login: { error: { password } } } = state;
  const isError = !_.isEmpty(password) || false;
  return {
    isError,
    message: password,
  };
};

const getAuthState = (state) => {
  const { login: { error: { auth } } } = state;
  const isError = !_.isEmpty(auth) || false;
  return {
    isError,
    message: auth,
  };
};

const mapStateToProps = (state) => {
  return {
    usernameState: getUsernameState(state),
    passwordState: getPasswordState(state),
    authState: getAuthState(state),
    isFormatValid: state.login.isFormatValid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      dispatch(setUsername(''));
      dispatch(setPassword(''));
    },
    onUsernameChange: (event) => {
      dispatch(setUsername(event.target.value));
      dispatch(validateUsername());
      dispatch(isFormatValid());
    },
    onPasswordChange: (event) => {
      dispatch(setPassword(event.target.value));
      dispatch(validatePassword());
      dispatch(isFormatValid());
    },
    login: () => {
      dispatch(login());
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
