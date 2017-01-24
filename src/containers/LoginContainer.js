import { connect } from 'react-redux';

import _ from '../util/_';
import Component from '../components/Login';
import { setUsername, setPassword, validate, login } from '../actions/login-action';

const getUsernameState = (state) => {
  const { login: { error } } = state;
  const usernameError = _.find(error, { field: 'username' });
  const isError = !_.isUndefined(usernameError) || false;
  return {
    isError,
    state: isError ? 'error' : null,
    message: _.get(usernameError, 'message', ''),
  };
};

const getPasswordState = (state) => {
  const { login: { error } } = state;
  const passwordError = _.find(error, { field: 'password' });
  const isError = !_.isUndefined(passwordError) || false;
  return {
    isError,
    state: isError ? 'error' : null,
    message: _.get(passwordError, 'message', ''),
  };
};

const mapStateToProps = (state) => {
  return {
    usernameState: getUsernameState(state),
    passwordState: getPasswordState(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUsernameChange: (event) => {
      dispatch(setUsername(event.target.value));
    },
    onPasswordChange: (event) => {
      dispatch(setPassword(event.target.value));
    },
    validate: () => {
      dispatch(validate());
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
