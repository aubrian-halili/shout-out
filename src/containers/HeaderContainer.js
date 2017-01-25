import { connect } from 'react-redux';

import _ from '../util/_';
import Component from '../components/Header';
import { logout } from '../actions/login-action';

const isLoggedIn = (state) => {
  const { user } = state;
  return _.has(user, 'name') || false;
};

const getName = (state) => {
  const { user } = state;
  return _.get(user, 'name', '');
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: isLoggedIn(state),
    name: getName(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
