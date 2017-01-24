import { connect } from 'react-redux';

import _ from '../util/_';
import Component from '../components/Login';
import { setUsername, setPassword, validate } from '../actions/login-action';

const mapStateToProps = (state) => {
  const { login: { error } } = state;
  const usernameError = _.find(error, { field: 'username' });
  const passwordError = _.find(error, { field: 'password' });
  return {
    usernameState: () => {
      return {
        state: _.isUndefined(usernameError) ? null : 'error',
        message: _.get(usernameError, 'message', ''),
      };
    },
    passwordState: () => {
      return {
        state: _.isUndefined(passwordError) ? null : 'error',
        message: _.get(passwordError, 'message', ''),
      };
    },
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
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
