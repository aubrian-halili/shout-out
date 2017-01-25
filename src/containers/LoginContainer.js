import { connect } from 'react-redux';

import Component from '../components/Login';
import { setUsername, setPassword, validate, login } from '../actions/login-action';

const getError = (state) => {
  const { login: { error } } = state;
  return error;
};

const mapStateToProps = (state) => {
  return {
    error: getError(state),
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
