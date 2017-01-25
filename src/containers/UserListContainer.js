import { connect } from 'react-redux';
import Component from '../components/UserList';

const mapStateToProps = (state) => {
  return {
    users: [{
      id: 1,
      name: 'Lawrence Mark',
    }, {
      id: 2,
      name: 'Daniel Spark',
    }],
  };
};

const Container = connect(
  mapStateToProps,
)(Component);

export default Container;
