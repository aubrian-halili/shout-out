import { connect } from 'react-redux';

import Component from '../components/Shout';
import { deleteShoutFromList } from '../actions/shout-action';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteShout: (id) => {
      dispatch(deleteShoutFromList(id));
    },
  };
};

const Container = connect(
  null,
  mapDispatchToProps,
)(Component);

export default Container;
