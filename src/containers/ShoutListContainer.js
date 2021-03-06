import { connect } from 'react-redux';

import Component from '../components/ShoutList';
import { getShoutList } from '../actions/shout-action';

const mapStateToProps = (state) => {
  return {
    shouts: state.shout.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: (userId) => {
      dispatch(getShoutList(userId));
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
