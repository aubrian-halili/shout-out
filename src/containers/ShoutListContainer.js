import { connect } from 'react-redux';
import Component from '../components/ShoutList';

const mapStateToProps = (state) => {
  return {
    shouts: [{
      id: 1,
      text: 'This is a post related to first.',
      date: '22/01/2017',
      user: 'Lawrence Mark',
    }, {
      id: 2,
      text: 'This is a post related to second.',
      date: '23/01/2017',
      user: 'Daniel Spark',
    }],
  };
};

const Container = connect(
  mapStateToProps,
)(Component);

export default Container;
