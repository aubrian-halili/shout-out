import { connect } from 'react-redux';

import Component from '../components/UserList';
import { getFollowing } from '../actions/following-action';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.user.id,
    following: state.following,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    init: () => {
      dispatch(getFollowing());
    },
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
