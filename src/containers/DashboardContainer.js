import { connect } from 'react-redux';

import _ from '../util/_';
import Component from '../components/Dashboard';

const getName = (state) => {
  const { user } = state;
  return _.get(user, 'name', '');
};

const mapStateToProps = (state) => {
  return {
    name: getName(state),
  };
};

const Container = connect(
  mapStateToProps,
)(Component);

export default Container;
